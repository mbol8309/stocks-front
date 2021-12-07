import { Warehouse } from "@mui/icons-material";
import { LoginPage } from "../../features/Auth/login";
import Logout from "../../features/Auth/logout";
import RegisterPage from "../../features/Auth/register";
import ProfilePage from "../../features/Profile/ProfilePage"
import SettingsPage from "../../features/Settings/SettingsPage"
import WarehousePage from "../../features/Warehouse/WarehousePage";

//icons
import WarehouseIcon from '@mui/icons-material/Warehouse';
import SettingsIcon from '@mui/icons-material/Settings';

import i18n from "../../i18n";

const main_routes = [
    {
        label: 'route.profile',
        slabel: 'description.profile',
        path: 'profile',
        icon: null,
        component: ProfilePage,
        sidebar: false
    },
    {
        label: 'route.warehouse',
        slabel: 'description.warehouse',
        path: 'warehouse',
        icon: <WarehouseIcon/>,
        component: WarehousePage,
        sidebar: true,
    },
    {
        label: 'route.settings',
        slabel: 'description.settings',
        path: 'settings',
        icon: <SettingsIcon/>,
        component: SettingsPage,
        sidebar: true
    }
];
/*
<Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterPage />} />
*/
const unauthenticated_routes = [
    {
        label: 'LogIn',
        path: '/login',
        icon: null,
        component: LoginPage
    },
    {
        label: 'LogOut',
        path: '/logout',
        icon: null,
        component: Logout
    },
    {
        label: 'Register',
        path: '/register',
        icon: null,
        component: RegisterPage
    },
]

export { main_routes, unauthenticated_routes }


