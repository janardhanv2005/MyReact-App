import RestaurentCard from "./RestaurentCard";
import { restaurentCards } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {

    const [restaurents, setRestaurents] = useState([]);

    async function  getData(){

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2472528&lng=80.1514447&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const restData = await data.json();

        const cards = restData.data.cards;

const targetCard = cards.find(card => 
  card?.card?.card?.gridElements?.infoWithStyle?.restaurants
);

// Then access the restaurants
const restaurentCards = targetCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //const restaurentCards = restData.data.cards[3].card.card.gridElements.infoWithStyle.restaurants;
        //console.log(restaurentCards);
        setRestaurents(restaurentCards)
    }

    useEffect(()=>{
        getData();
    },[]);

   

    return (
    <div>
    <div id='body'>
    <button className="filter-btn" onClick={
        () => {
           const filteredRestaurentCards = restaurentCards.filter((restCard)=> restCard.rating > 4);
           setRestaurents(filteredRestaurentCards);
        }
    }>Top Rated Restaurents</button>
    <div id='restCardContainer'>
    {restaurents.map((resCard) => (<RestaurentCard key={resCard.info.id} resCard={resCard.info}/>))}
    </div>
    </div>
    </div>
  )};

  export default Body;