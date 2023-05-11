import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { WarehouseComponent } from 'app/Warehouse/warehouse.component';
import { StoreComponent } from 'app/store/store.component';
import { UpdateWarehouseComponent } from 'app/update-warehouse/update-warehouse.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'warehouse',      component: WarehouseComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'update-warehouse/:id', component: UpdateWarehouseComponent },
    { path: 'store',          component: StoreComponent },

];
