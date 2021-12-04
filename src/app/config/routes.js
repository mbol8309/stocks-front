import { LoginPage } from "../../features/Auth/login";
import Logout from "../../features/Auth/logout";
import RegisterPage from "../../features/Auth/register";
import ProfilePage from "../../features/Profile/ProfilePage"
import SettingsPage from "../../features/Settings/SettingsPage"

import i18n from "../../i18n";

const main_routes = [
    {
        label: i18n.t('route.profile'),
        path: 'profile',
        icon: null,
        component: ProfilePage
    },
    {
        label: 'WareStores',
        path: 'warestores',
        icon: null,
        component: ProfilePage
    },
    {
        label: 'Settings',
        path: 'settings',
        icon: null,
        component: SettingsPage
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


