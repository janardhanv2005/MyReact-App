import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {return (
<div className='headerContainer'>
<img className='res-logo' src='https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg'/>
<ul className="nav-items">
  <li>Home</li>
  <li>About</li>
  <li>Countact Us</li>
  <li>Cart</li>
</ul>
</div>
)};

const Footer = () => {return (
  <div className='footerContainer'>
  <img className='res-logo' src='https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg'/>
  <ul className="nav-items">
    <li>Home</li>
    <li>About</li>
    <li>Countact Us</li>
    <li>Cart</li>
  </ul>
  </div>
  )};

const RestaurentCard = () => { 
  return (
  <div id='restCard' className='rest-card'>
    <img className='rest-card-img' src='https://product-assets.faasos.io/eatsure/production/veg-biryani-online.jpeg'></img>
    <h2>Jana's Biryani</h2>
    <h4>South Indian, Asian</h4>
    <h5>4.7 rating</h5>
    <h5>29 minutes</h5>
  </div>
)};

const Body = () => {
  return (
  <div>
  <div id='body'>
  <h2>Search</h2>
  <div id='restCardContainer'>
  <RestaurentCard />
  <RestaurentCard />
  <RestaurentCard />
  <RestaurentCard />
  <RestaurentCard />
  <RestaurentCard />
  <RestaurentCard />
  <RestaurentCard />
  <RestaurentCard />
  <RestaurentCard />
  <RestaurentCard />
  <RestaurentCard />
  <RestaurentCard />
  <RestaurentCard />
  <RestaurentCard />
  </div>
  </div>
  </div>
)};

const AppLayout = () => {
  return (
    <div className="app">
    <Header />
    <Body />
    <Footer />
    </div>
  )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


