import { useQuery } from "@apollo/client"
import { USER_ME, useUserMe } from "./AuthAPI"
import { Navigate, Outlet } from 'react-router-dom';
import StockBackDrop from "../../components/StockBackDrop";
import { useState } from "react";
import {UserContext} from "./UserContext";

const Authenticated = (props) => {
    const { children } = props
    const [user, setUser] = useState(null);

    const handleError = (error) => {
        return (<Navigate to="/login" />)
    }

    const updateUser = ({me}) => {
        setUser(me);
    }
    
    const { loading, error, data } = useUserMe(handleError,updateUser)


    if (loading) return (
        <StockBackDrop />
    );
    if (error?.networkError?.statusCode == 401) { //unauthenticated
        return (<Navigate to="/login" />)
    }
    if (error) return "Error" + error.message;

    const value = { user: user, changeValue: setUser }

    return (
        <UserContext.Provider value={value}>
            <Outlet />
        </UserContext.Provider>
    )
}

export default Authenticated;