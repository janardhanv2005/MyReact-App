import React from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import {useRestaurentMenuData} from '../utils/useRestaurentMenuData';

const RestaurentMenu = () => {
    const {restId} = useParams();
   //console.log(restId);
    const menuData = useRestaurentMenuData(restId);

        if(menuData === null) return <Shimmer />;

        const itemCards = menuData.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
        //console.log(itemCards);
        const restName = menuData.cards[0].card.card.text;
    return(
        <div className="res-menu">
            <h1>{restName}</h1>
            <ul>
            {itemCards.map((item)=>
                <li key={item.card.info.id}>{item.card.info.name}  ---  Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
            )}
            </ul>

        </div>
    )
}

export default RestaurentMenu;