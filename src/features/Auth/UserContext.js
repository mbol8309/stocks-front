import React, { useContext } from "react";

const UserContext = React.createContext({
    user:null,
    changeUser:null
});

const useUser = () => {
    return useContext(UserContext);
}

export {UserContext, useUser};