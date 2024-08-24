import { createContext } from "react";

const UserContext = createContext({
    logedInUser: "defaultUser"
});

export default UserContext;