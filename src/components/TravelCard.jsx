import { Link } from "react-router-dom";

function TravelCard({
  id,
  travelLocation,
  travelImage,
  nameofTraveller,
  accomodationType,
}) {
  return (
    <div className="w-60 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition hover:scale-105">
      <Link to={`/travelPlans/${id}`}>
        <div className="relative w-full h-80">
          <img
            className="w-full h-full object-cover"
            src={travelImage}
            alt={travelLocation}
          />

          <div className="absolute inset-0 flex flex-col justify-end px-5 py-4 text-white">
            <h2 className="text-xl font-bold">{travelLocation}</h2>

            <p className="mt-[12px]">Travelled by {nameofTraveller}</p>

            <p className="mt-[2px]">{accomodationType}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TravelCard;
