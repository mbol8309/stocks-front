import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react";
import { useTranslation } from "react-i18next";
import {useNavigate} from 'react-router-dom';
import { useUser } from "../Auth/UserContext";


const user_menu_items = [
    {   
        title: 'menu.profile',
        icon: null,
        url: '/profile',
    },
    {   
        title: 'menu.dashboard',
        icon: null,
        url: '/dashboard',
    },
    {   
        title: 'menu.settings',
        icon: null,
        url: '/settings',
    },
    {   
        title: 'menu.logout',
        icon: null,
        url: '/logout',
    },
]

const UserMenu = (props) => {
    const { user } = useUser()
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();

    const { t } = useTranslation('main')

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const handleRedirect = (url) => {
        navigate(url);
    }

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                { user_menu_items.map((item) => (
                    <MenuItem key={item.title} onClick={() => handleRedirect(item.url)}>
                        <Typography textAlign="center">{t(item.title)}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default UserMenu