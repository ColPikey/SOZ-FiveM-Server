import { Qbcore } from '../../client/qbcore';
import { Once } from '../../core/decorators/event';
import { Inject } from '../../core/decorators/injectable';
import { Provider } from '../../core/decorators/provider';
import { Rpc } from '../../core/decorators/rpc';
import { Job } from '../../shared/job';
import { JobType } from '../../shared/job';
import { RpcEvent } from '../../shared/rpc';
import { PrismaService } from '../database/prisma.service';
import { ItemService } from '../item/item.service';
import { PlayerService } from '../player/player.service';

@Provider()
export class JobProvider {
    @Inject(PrismaService)
    private prismaService: PrismaService;

    @Inject(Qbcore)
    private QBCore: Qbcore;

    @Inject(ItemService)
    private itemService: ItemService;

    @Inject(PlayerService)
    private playerService: PlayerService;

    @Rpc(RpcEvent.JOB_GET_JOBS)
    public async getJobs(): Promise<Job[]> {
        const jobs = this.QBCore.getJobs();

        const grades = await this.prismaService.job_grades.findMany({
            orderBy: {
                jobId: 'asc',
            },
        });

        grades
            .filter(grade => grade.owner > 0)
            .forEach(grade => {
                const job = jobs.find(j => j.id === grade.jobId);
                if (job) {
                    if (typeof job.grades === 'object') {
                        job.grades = Object.values(job.grades);
                    }
                    if (!job.grades.find(g => g.id === grade.id)) {
                        job.grades.push({
                            id: grade.id,
                            jobId: grade.jobId,
                            salary: grade.salary,
                            name: grade.name,
                            is_default: grade.is_default === 1,
                            owner: grade.owner,
                            permissions: JSON.parse(grade.permissions),
                            weight: grade.weight,
                        });
                    }
                }
            });

        return jobs.filter(job => job.grades.length > 0);
    }

    private async useWorkClothes(source: number) {
        const job = this.playerService.getPlayer(source).job.id;
        switch (job) {
            case JobType.Bennys:
                TriggerClientEvent(`soz-bennys:client:OpenCloakroomMenu`, source);
                break;
            case JobType.LSMC:
            case JobType.Taxi:
            case JobType.Pawl:
            case JobType.Upw:
                TriggerClientEvent(`${job}:client:OpenCloakroomMenu`, source);
                break;
            case JobType.BCSO:
            case JobType.LSPD:
            case 'fbi':
                TriggerClientEvent(`police:client:OpenCloakroomMenu`, source);
                break;
            default:
                TriggerClientEvent(`jobs:client:${job}:OpenCloakroomMenu`, source);
                break;
        }
    }

    @Once()
    public onStart() {
        this.itemService.setItemUseCallback('work_clothes', this.useWorkClothes.bind(this));
    }
}
