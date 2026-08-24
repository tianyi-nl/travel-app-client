import {Link} from "react-router-dom"
import "./TravelCard.css"
 

function TravelCard({ id, travelLocation, travelImage, nameofTraveller }) {

  return (
     <div className="TravelCard">
      <img
        className="TravelCard-image"
        src={travelImage}
        alt={travelLocation}
      />

      <div className="TravelCard-content">
        <h3>{travelLocation}</h3>

        <p>Travelled by {nameofTraveller}</p>

        <Link to={`/travelPlans/${id}`} className="TravelCard-link">
          View travel
        </Link>
      </div>
    </div>
  );
}

export default TravelCard;
