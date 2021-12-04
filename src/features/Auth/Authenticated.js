import { useQuery } from "@apollo/client"
import { USER_ME, useUserMe } from "./AuthAPI"
import { Navigate, Outlet } from 'react-router-dom';
import StockBackDrop from "../../components/StockBackDrop";

const Authenticated = (props) => {
    const { children } = props

    const handleError = (error) => {
        return (<Navigate to="/login" />)
    }

    const { loading, error, data} = useUserMe(handleError)

    if (loading) return (
        <StockBackDrop />
    );
    if (error?.networkError?.statusCode == 401) { //unauthenticated
        return (<Navigate to="/login" />)
    }
    if (error) return "Error" + error.message;

    return (
        <Outlet/>
    )
}

export default Authenticated;