import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import {Shimmer} from "./Shimmer";
import {ALL_API_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {

    const [restaurents, setRestaurents] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);

    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus);

    const[searchText, setSearchText] = useState('');
    async function  getData(){

        const data = await fetch(ALL_API_URL);
        const restData = await data.json();

        const cards = restData.data.cards;

        const targetCard = cards.find(card => 
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        // Then access the restaurants
        const restaurentCards = targetCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        //const restaurentCards = restData.data.cards[3].card.card.gridElements.infoWithStyle.restaurants;
        //console.log(restaurentCards);
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
    {filteredRestList.map((resCard) => (
        <Link style={{ textDecoration: 'none', color: 'black' }} key={resCard.info.id} to={"restaurent/" + resCard.info.id}><RestaurentCard  resCard={resCard.info}/></Link>
        ))}
    </div>
    </div>
    </div>
  )};

  export default Body;