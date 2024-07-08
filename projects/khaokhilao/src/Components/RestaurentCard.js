import { CDN_LINK } from "../utils/constant";

// restro cards
const RestaurentCard = ({resData}) => {
    const {name, avgRating, locality, areaName, costForTwo, sla} = resData?.info;
    return (
      <div className="rest-cards" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="rest-img"
          src={CDN_LINK + resData.info.cloudinaryImageId} alt="rest-logo"
        />
        <div className="card-descr">
          <h3>{name}</h3>
          <span>
            <i className="fa-regular fa-star"></i> <b>{avgRating} Stars {sla?.slaString}</b>
          </span>
          <p className="">{costForTwo}</p>
          <p className="">{locality}</p>
          <p className="">{areaName}</p>
        </div>
      </div>
    );
  };

  export default RestaurentCard;