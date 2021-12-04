import { Menu as MenuIcon } from "@mui/icons-material";
import { Avatar, Button, Container, CssBaseline, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";

import { Box } from "@mui/system";
import React from "react";
import { useUserMe } from "../Auth/AuthAPI";
import LocaleMenu from "./LocaleMenu";
import { AppBarDrawerButton, SideBar } from "./Sidebar";
import UserMenu from "./UserMenu";


import { useTheme, styled } from '@mui/material/styles';
import AppBar from '../../components/AppBar'

const pages = ['Products', 'Pricing', 'Blog'];


const Header = (props) => {
    const { data } = useUserMe()
    const user = data.me;

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const theme = useTheme();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenSideBar = () => {
        setSidebarOpen(true);
    }

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    }



    return (
        <><CssBaseline/>
            <AppBar position="fixed" sidebarOpen={sidebarOpen}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AppBarDrawerButton open={sidebarOpen} handleDrawerOpen={handleOpenSideBar} theme={theme} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            Stocks
                        </Typography>


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            Stocks
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            
                        </Box>
                        <LocaleMenu />

                        <UserMenu user={user} />
                    </Toolbar>
                </Container>
            </AppBar>
            <SideBar open={sidebarOpen} handleDrawerClose={handleCloseSidebar} theme={theme} />
            <Toolbar/>
        </>
    );
}

export default Header