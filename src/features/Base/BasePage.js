import { useUserMe } from "../Auth/AuthAPI";

const BasePage = (props) => {

    const {data} = useUserMe()


    return(
        <>
        <p>Name: {data.me.name}</p>
        <p>Email: {data.me.email}</p>
        </>
    )
}

export default BasePage;