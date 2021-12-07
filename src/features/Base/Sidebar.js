import MuiDrawer from "@mui/material/Drawer"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useTheme, styled } from '@mui/material/styles';
import { drawerWidth } from "../../app/config/globalvariables";
import Drawer from "../../components/Drawer";
import DrawerHeader from "../../components/DrawerHeader";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router";
import { main_routes } from "../../app/config/routes";
import { useTranslation } from "react-i18next";

const sidebar_links = [
    {
        title: 'Warehouses',
        link: '/warehouses',
        icon: <WarehouseIcon />
    },
    {
        title: 'div',
    },
    {
        title: 'Settings',
        link: '/settings',
        icon: <SettingsIcon />
    }
];

const AppBarDrawerButton = (props) => {
    const { handleDrawerOpen, open } = props;

    return (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
            }}
        >
            <MenuIcon />
        </IconButton>
    )
}

const SidebarItem = (props) => {
    const { label, icon, path, handleClick } = props;
    const { t } = useTranslation('main');

    if (label == 'div') {
        return (
            <Divider />
        )
    }

    return (
        <ListItem button onClick={() => handleClick(path)}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={t(label)} secondary={props.slabel ?  t(props.slabel) : ''} />
        </ListItem>
    )
}

const SideBar = (props) => {

    const { open, handleDrawerClose, theme } = props;
    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate('/' + link);
        handleDrawerClose();
    }

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {
                    main_routes.filter((r) => r.sidebar).map((item, index) => (
                        <SidebarItem key={index} {...item} handleClick={handleClick} />
                    ))
                }

            </List>

        </Drawer>
    )
}

export { SideBar, AppBarDrawerButton }