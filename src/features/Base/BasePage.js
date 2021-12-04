import { useUserMe } from "../Auth/AuthAPI";
import Header from "./Header";

import { Route, Routes, Outlet } from "react-router-dom";

const BasePage = (props) => {

    const { data } = useUserMe()


    return (
        <>
            <Header />
            
            <p>Name: {data.me.name}</p>
            <p>Email: {data.me.email}</p>
            <Outlet/>
        </>
    )
}

export default BasePage;