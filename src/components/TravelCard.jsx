import { Link } from "react-router-dom";

function TravelCard({ id, travelLocation, travelImage, nameofTraveller,accomodationType }) {
  return (
    <div className="w-80 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
      <Link to={`/travelPlans/${id}`}>
        <img
          className="w-full h-48 object-cover"
          src={travelImage}
          alt={travelLocation}
        />

        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-900">{travelLocation}</h2>

          <p className="text-gray-500 mt-2">Travelled by {nameofTraveller}</p>

          <p className="text-gray-600 mt-3">{accomodationType}</p>
        </div>
      </Link>
    </div>
  );
}

export default TravelCard;
