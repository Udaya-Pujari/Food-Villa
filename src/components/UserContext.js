import { createContext } from "react";

const UserContext=createContext({
    loggedInUser:'default value',
})

export default UserContext