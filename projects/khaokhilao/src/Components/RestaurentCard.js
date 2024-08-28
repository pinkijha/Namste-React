import { CDN_LINK } from "../utils/constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import UserContext from "../utils/UserContext";

// restro cards
const RestaurentCard = ({resData}) => {  
  const element = <FontAwesomeIcon icon={faStar} />
  const {logedInUser} = useContext(UserContext) //user Context
  const avgratinglook = "bg-green-600 text-xs text-white p-1 m-1 mr-3 border rounded-md";
  const avgratinglook1 = "bg-orange-600 text-xs text-white p-1 m-1 mr-3 border rounded-md";



    const {name, avgRating, locality,  areaName, costForTwo, sla} = resData?.info;
    return (
      <div  className={`  rest-cards hover:bg-green-600 transform hover:scale-110 transition duration-300
       ease-in-out p-3 m-4 w-[250px] h-[350px] border rounded-md shadow-2xl`}  style={{ backgroundColor: "white", hover:'bg-grren-600' }}>
        <img
          className="rest-img w-[260px] h-[200px] border rounded-lg  "
          src={CDN_LINK + resData.info.cloudinaryImageId} alt="rest-logo"
        />
        <div className="card-descr py-4 ">
          <h3 className="font-bold m-1">{name}</h3>
         
            <span className={avgratinglook}>{element} {avgRating} </span> <span>{sla?.slaString}</span>
         
          <p className=""></p>
          <p className="">{areaName}<span className="m-2 font-bold text-sm">{costForTwo}</span></p>
          {/* <p className="">{locality}</p> */}
          {/* <p>User: {logedInUser}</p> */}
        </div>
      </div>
    );
  };

  export const withPromotedLabel = (RestaurentCard) =>{
    return(props) => {
      return (
        <div>
          <label className="absolute  bg-black
            text-white rounded-xl p-2 m-2">Promoted</label>
          <RestaurentCard {...props}/>
        </div>
      )
      
    }
  }

  export default RestaurentCard;