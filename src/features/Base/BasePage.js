import { useUserMe } from "../Auth/AuthAPI";
import Header from "./Header";

const BasePage = (props) => {

    const {data} = useUserMe()


    return(
        <>
        <Header />
        <p>Name: {data.me.name}</p>
        <p>Email: {data.me.email}</p>
        </>
    )
}

export default BasePage;