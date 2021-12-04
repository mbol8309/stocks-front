import { useUserMe } from "../Auth/AuthAPI";
import Header from "./Header";
import { useTheme } from '@mui/material/styles';

import { Route, Routes, Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import { drawerWidth } from "../../app/config/globalvariables";


const BasePage = (props) => {

    const { data } = useUserMe()
    const theme = useTheme();


    return (
        <>
            <Header />
            <Box component="main" sx={{ marginLeft:{
                xs:`calc(${theme.spacing(7)} + 10px)`,
                sm:`calc(${theme.spacing(9)} + 10px)`
                }}}>
            
            <p>Name: {data.me.name}</p>
            <p>Email: {data.me.email}</p>
            <Outlet/>
            </Box>
        </>
    )
}

export default BasePage;