import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import {Shimmer} from "./Shimmer";

const Body = () => {

    const [restaurents, setRestaurents] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);

    const[searchText, setSearchText] = useState('');
    async function  getData(){

        //Khammam
       // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2472528&lng=80.1514447&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

       //Hyd
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const restData = await data.json();

        const cards = restData.data.cards;

const targetCard = cards.find(card => 
  card?.card?.card?.gridElements?.infoWithStyle?.restaurants
);

// Then access the restaurants
const restaurentCards = targetCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        //const restaurentCards = restData.data.cards[3].card.card.gridElements.infoWithStyle.restaurants;
        console.log(restaurentCards);
        setRestaurents(restaurentCards);
        setFilteredRestList(restaurentCards);
    }

    useEffect(()=>{
       getData();
    },[]);

    if(restaurents === undefined || restaurents.length === 0){
        return <Shimmer />
       }
    return (
    <div>
    <div id='body'>
    <div className="filter-class">
    <input type="text" value={searchText} onChange={(e) => {
       setSearchText(e.target.value);
    }}></input>
    <button className="filter-btn" onClick={
        () => {
           const filteredRestaurents = restaurents.filter((restCard)=> restCard.info.name.toLowerCase().includes(searchText.toLowerCase()));
           //setRestaurents(filteredRestaurents);
           setFilteredRestList(filteredRestaurents);
        }
    }>Search</button>
    <button className="filter-btn" onClick={
        () => {
           const filteredRestaurents = restaurents.filter((restCard)=> restCard.info.avgRating > 4);
           //setRestaurents(filteredRestaurents);
           setFilteredRestList(filteredRestaurents);
        }
    }>Top Rated Restaurents</button>
    </div>
    <div id='restCardContainer'>
    {filteredRestList.map((resCard) => (<RestaurentCard key={resCard.info.id} resCard={resCard.info}/>))}
    </div>
    </div>
    </div>
  )};

  export default Body;