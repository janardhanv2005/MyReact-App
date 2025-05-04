import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  
  const [loginState, setLoginState] = useState("Login");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    //console.log("useEffect Called");
  },[loginState])
  return (
    <div className='headerContainer'>
    <img className='res-logo' src='https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg'/>
    <ul className="nav-items">
      <li>Online Status: {onlineStatus === true ? "🟩" : "🔴" }</li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/grocery">Grocery</Link></li>
      <li>Cart</li>
      <button onClick={() =>{
       loginState === "Logout" ? setLoginState("Login") : setLoginState("Logout");
      }}>{loginState}</button>
    </ul>
    </div>
    )};

    export default Header;