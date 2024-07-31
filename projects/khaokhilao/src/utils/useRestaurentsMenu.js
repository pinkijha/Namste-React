import { MENU_URL } from "./constant";
import { useEffect, useState } from "react";

const useRestaurentsMenu = (resId) => {
    const [restaurentInfo, setrestaurentInfo] = useState(null);
    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async() => {
        const data = await fetch(MENU_URL +resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setrestaurentInfo(json.data);
    } 
    return restaurentInfo;
}
export default useRestaurentsMenu;