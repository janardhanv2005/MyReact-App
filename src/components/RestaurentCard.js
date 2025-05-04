import {COMINGSOON_IMG} from '../utils/mockData'
const RestaurentCard = ({resCard}) => { 
  const baseImageURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const {id, name, cuisines, avgRating, sla, cloudinaryImageId} = resCard;
    return (
    <div id='restCard' className='rest-card'>
      <img className='rest-card-img' src={baseImageURL+cloudinaryImageId} alt={name}></img>
      <h2>{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h5>{avgRating}</h5>
      <h5>{sla.slaString}</h5>
    </div>
  )};

  export default RestaurentCard;