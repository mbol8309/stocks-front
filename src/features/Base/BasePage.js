import { useUserMe } from "../Auth/AuthAPI";
import Header from "./Header";
import { useTheme } from '@mui/material/styles';

import { Route, Routes, Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import { drawerWidth } from "../../app/config/globalvariables";
import { useUser } from "../Auth/UserContext";


const BasePage = (props) => {

    const { user } = useUser()
    const theme = useTheme();


    return (
        <>
            <Header />
            <Box component="main" sx={{ marginLeft:{
                xs:`calc(${theme.spacing(7)} + 10px)`,
                sm:`calc(${theme.spacing(9)} + 10px)`
                }}}>
            <Outlet/>
            </Box>
        </>
    )
}

export default BasePage;