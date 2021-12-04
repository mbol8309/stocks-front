import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import i18n from "../../i18n";
import ReactCountryFlag from "react-country-flag"


const lang_menu_items = [
    {
        title: 'menu.lang.es',
        icon: <ReactCountryFlag countryCode="ES" />,
        onClick: () => i18n.changeLanguage('es')
    },
    {
        title: 'menu.lang.en',
        icon: <ReactCountryFlag countryCode="US" />,
        onClick: () => i18n.changeLanguage('en')
    },
]

const LocaleMenu = (props) => {
    const { user } = props
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
    const localeToCountry = (lang) => {
        let _l = {
            en:'US',
            es:'ES'
        };
        return _l[lang];
    } 

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ReactCountryFlag countryCode={localeToCountry(i18n.language)} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{color:'white', flexGrow: 1, marginLeft:2, marginRight:2}}>{i18n.language}</Typography>
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
                {lang_menu_items.map((item) => (
                    <MenuItem key={item.title} onClick={item.onClick}>
                        {item.icon ?? item.icon}
                        <Typography textAlign="center">{t(item.title)}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default LocaleMenu