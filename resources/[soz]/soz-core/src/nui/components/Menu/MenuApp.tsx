import { FunctionComponent, useState } from 'react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';

import { MenuType } from '../../../shared/nui/menu';
import { useMenuNuiEvent } from '../../hook/nui';
import { BahamaUnicornJobMenu } from '../BahamaUnicorn/BahamaUnicornJobMenu';
import { FightForStyleJobMenu } from '../FightForStyle/FightForStyleJobMenu';
import { FoodJobMenu } from '../Food/FoodJobMenu';
import { MenuDemo } from './MenuDemo';
import { MenuSetHealthState } from './MenuSetHealthState';

export const MenuApp: FunctionComponent = () => {
    return (
        <MemoryRouter>
            <MenuRouter />
        </MemoryRouter>
    );
};

const MenuRouter: FunctionComponent = () => {
    const navigate = useNavigate();
    const [menuData, setMenuData] = useState(null);

    useMenuNuiEvent('SetMenuType', ({ menuType, data }) => {
        navigate(menuType ? `/${menuType}` : '/');
        setMenuData(data);
    });

    useMenuNuiEvent('CloseMenu', () => {
        navigate('/');
        setMenuData(null);
    });

    return (
        <Routes>
            <Route path={`/${MenuType.BahamaUnicornJobMenu}/*`} element={<BahamaUnicornJobMenu data={menuData} />} />
            <Route path={`/${MenuType.Demo}/*`} element={<MenuDemo />} />
            <Route path={`/${MenuType.FightForStyleJobMenu}/*`} element={<FightForStyleJobMenu data={menuData} />} />
            <Route path={`/${MenuType.FoodJobMenu}/*`} element={<FoodJobMenu data={menuData} />} />
            <Route path={`/${MenuType.SetHealthState}/*`} element={<MenuSetHealthState source={menuData} />} />
        </Routes>
    );
};
