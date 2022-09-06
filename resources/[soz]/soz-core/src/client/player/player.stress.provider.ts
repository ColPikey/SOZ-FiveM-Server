import { On, OnEvent } from '../../core/decorators/event';
import { Inject } from '../../core/decorators/injectable';
import { Provider } from '../../core/decorators/provider';
import { Tick, TickInterval } from '../../core/decorators/tick';
import { ClientEvent, ServerEvent } from '../../shared/event';
import { Feature, isFeatureEnabled } from '../../shared/features';
import { getDistance, Vector3 } from '../../shared/polyzone/vector';
import { Notifier } from '../notifier';
import { ProgressService } from '../progress.service';
import { PlayerService } from './player.service';

const EVENT_DISTANCE_TRIGGER = 50.0;

@Provider()
export class PlayerStressProvider {
    @Inject(PlayerService)
    private playerService: PlayerService;

    @Inject(Notifier)
    private notifier: Notifier;

    @Inject(ProgressService)
    private progressService: ProgressService;

    private isStressUpdated = false;
    private lastStressDowngrade = null;
    private wasDead = false;

    private updateStress(stress = 1): void {
        this.isStressUpdated = true;
        TriggerServerEvent(ServerEvent.PLAYER_INCREASE_STRESS, stress);

        this.notifier.notify('Un événement vous a légèrement ~r~angoissé~s~.', 'error');

        setTimeout(() => {
            this.isStressUpdated = false;
        }, 120000);
    }

    @On('CEventShockingGunshotFired', false)
    public onCEventShockingGunshotFired(entities, eventEntity): void {
        this.onStressfulGameEvent(entities, eventEntity, 60.0, false);
    }

    @On('CEventOnFire', false)
    public onCEventOnFire(entities, eventEntity): void {
        this.onStressfulGameEvent(entities, eventEntity, 70.0, false);
    }

    @On('CEventRanOverPed', false)
    public onCEventRanOverPed(entities, eventEntity): void {
        this.onStressfulGameEvent(entities, eventEntity, 50.0, false);
    }

    @On('CEventShocking', false)
    public onCEventShocking(entities, eventEntity): void {
        this.onStressfulGameEvent(entities, eventEntity, 30.0, true);
    }

    @On('CEventShockingCarCrash', false)
    public onCEventShockingCarCrash(entities, eventEntity): void {
        this.onStressfulGameEvent(entities, eventEntity, 40.0, true);
    }

    public onStressfulGameEvent(entities, eventEntity, trigger_distance: number, must_be_player = false): void {
        if (!isFeatureEnabled(Feature.MyBodySummer)) {
            return;
        }

        if (this.isStressUpdated) {
            return;
        }

        if (!eventEntity || !DoesEntityExist(eventEntity)) {
            return;
        }

        if (must_be_player && (!IsEntityAPed(eventEntity) || !IsPedAPlayer(eventEntity))) {
            return;
        }

        const distance = getDistance(
            GetEntityCoords(eventEntity) as Vector3,
            GetEntityCoords(PlayerPedId()) as Vector3
        );

        if (distance > trigger_distance) {
            return;
        }
    }

    @Tick(TickInterval.EVERY_SECOND)
    async checkStressfulEvent(): Promise<void> {
        if (!isFeatureEnabled(Feature.MyBodySummer)) {
            return;
        }

        if (this.isStressUpdated) {
            return;
        }

        const player = this.playerService.getPlayer();

        if (player === null || player.metadata.godmode) {
            return;
        }

        if (!this.wasDead && player.metadata.isdead) {
            this.wasDead = true;

            return this.updateStress();
        }

        this.wasDead = player.metadata.isdead;

        if (player.metadata.isdead) {
            return;
        }

        const ped = PlayerPedId();

        if (IsPedShooting(ped)) {
            return this.updateStress();
        }

        if (GetPedAlertness(ped) > 0) {
            return this.updateStress();
        }

        if (IsPedInMeleeCombat(ped)) {
            return this.updateStress();
        }

        const currentVehicle = GetVehiclePedIsIn(ped, false);

        if (currentVehicle) {
            const vehicleClass = GetVehicleClass(currentVehicle);

            if (vehicleClass !== 14 && vehicleClass !== 15 && vehicleClass !== 16) {
                const speed = GetEntitySpeed(currentVehicle) * 3.6;

                if (speed > 170) {
                    return this.updateStress();
                }
            }
        }
    }

    @OnEvent(ClientEvent.PLAYER_HEALTH_DO_YOGA)
    async doYoga(): Promise<void> {
        const { completed } = await this.progressService.progress('Yoga', 'Vous vous relaxez...', 30000, {
            dictionary: 'timetable@amanda@ig_4',
            name: 'ig_4_idle',
        });

        if (!completed) {
            return;
        }

        if (this.lastStressDowngrade && GetGameTimer() - this.lastStressDowngrade < 60000) {
            return;
        }

        this.lastStressDowngrade = GetGameTimer();

        TriggerServerEvent(ServerEvent.PLAYER_INCREASE_STRESS, -1);
    }

    @Tick(TickInterval.EVERY_SECOND)
    async onTick(): Promise<void> {
        if (!isFeatureEnabled(Feature.MyBodySummer)) {
            return;
        }

        const player = this.playerService.getPlayer();

        if (player === null || player.metadata.isdead || player.metadata.godmode) {
            return;
        }

        if (player.metadata.stress_level < 20) {
            return;
        } else if (player.metadata.stress_level < 40) {
            ShakeGameplayCam('MEDIUM_EXPLOSION_SHAKE', 0.01);
        } else if (player.metadata.stress_level < 60) {
            ShakeGameplayCam('MEDIUM_EXPLOSION_SHAKE', 0.03);
        } else if (player.metadata.stress_level < 80) {
            ShakeGameplayCam('MEDIUM_EXPLOSION_SHAKE', 0.07);
        } else {
            ShakeGameplayCam('MEDIUM_EXPLOSION_SHAKE', 0.1);
        }
    }
}
