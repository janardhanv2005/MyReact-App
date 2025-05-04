import { useState, useEffect } from "react";
import {REST_MENU_API} from "../utils/constants";

export const useRestaurentMenuData = (restId) => {
    //console.log(restId);
    const [menuData, setMenuData] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    async function fetchData(){
        const data = await fetch(REST_MENU_API+restId);
        const json = await data.json();
        setMenuData(json.data);
    }

    console.log(menuData);
    return menuData;
}