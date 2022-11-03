import { AdminMenuStateProps } from '../../nui/components/Admin/AdminMenu';
import { WardrobeMenuData } from '../cloth';
import { FuelType } from '../fuel';
import { BossShopMenu } from '../job';
import { GarageMenuData } from '../vehicle/garage';
import { BennysUpgradeVehicleMenuData, VehicleCustomMenuData } from '../vehicle/modification';
import { VehicleAuctionMenuData, VehicleDealershipMenuData, VehicleMenuData } from '../vehicle/vehicle';

export interface NuiMenuMethodMap {
    ArrowDown: never;
    ArrowLeft: never;
    ArrowRight: never;
    ArrowUp: never;
    Backspace: never;
    CloseMenu: never;
    Enter: never;
    SetMenuType: SetMenuType;
}

export type SetMenuType = {
    menuType: MenuType;
    data: any;
    subMenuId?: string;
};

export enum MenuType {
    AdminMenu = 'AdminMenu',
    BahamaUnicornJobMenu = 'baun_job',
    BennysOrderMenu = 'bennys_order',
    BennysUpgradeVehicle = 'bennys_upgrade_vehicle',
    BossShop = 'job_boss_shop',
    Demo = 'demo',
    BossShop = 'boss_shop',
    MaskShop = 'mask_shop',
    FightForStyleJobMenu = 'ffs_job',
    FoodJobMenu = 'food_job_menu',
    Garage = 'garage_menu',
    JobBennys = 'job_bennys',
    OilSetStationPrice = 'oil_set_station_price',
    SetHealthState = 'set_health_state',
    StonkJobMenu = 'stonk_job',
    Vehicle = 'vehicle',
    VehicleAuction = 'vehicle_auction',
    VehicleCustom = 'vehicle_custom',
    VehicleDealership = 'vehicle_dealership',
    Wardrobe = 'wardrobe',
}

export interface MenuTypeMap extends Record<MenuType, any> {
    [MenuType.AdminMenu]: AdminMenuStateProps['data'];
    [MenuType.BahamaUnicornJobMenu]: any;
    [MenuType.BennysOrderMenu]: BennysUpgradeVehicleMenuData;
    [MenuType.BossShop]: BossShopMenu;
    [MenuType.Demo]: never;
    [MenuType.FightForStyleJobMenu]: any;
    [MenuType.Garage]: GarageMenuData;
    [MenuType.JobBennys]: never;
    [MenuType.OilSetStationPrice]: Record<FuelType, number>;
    [MenuType.SetHealthState]: number;
    [MenuType.Vehicle]: VehicleMenuData;
    [MenuType.VehicleAuction]: VehicleAuctionMenuData;
    [MenuType.VehicleCustom]: VehicleCustomMenuData;
    [MenuType.VehicleDealership]: VehicleDealershipMenuData;
    [MenuType.Wardrobe]: WardrobeMenuData;
}
