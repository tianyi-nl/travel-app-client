import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TravelDetailsPage() {
  //console.log("traveldetailspage is running")
  const { travelId } = useParams();

  const [travelPlan, setTravelPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [travelId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://travelapp-json-server.onrender.com/travelPlans/${travelId}`,
      );

      setTravelPlan(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const deleteTravel = async () => {
    await axios.delete(
      `https://travelapp-json-server.onrender.com/travelPlans/${travelId}`,
    );
    navigate("/");
  };

  if (isLoading) return <h3>loading....</h3>;
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row pt-[48px] gap-12 mb-8">
          {/* Photo */}
          <div className="lg:w-2/3 h-[480px] rounded-2xl overflow-hidden shadow-md">
            <img
              src={travelPlan.travelImage}
              alt={travelPlan.travelLocation}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Traveller info */}
          <div className="lg:w-1/3 flex flex-col justify-end">
            <p className="text-gray-500 text-sm">Travelled by</p>
            <p className="text-xl font-semibold text-gray-900">
              {travelPlan.nameofTraveller}
            </p>
          </div>
        </div>

        {/* Location title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {travelPlan.travelLocation}
        </h1>

        {/* Travel info card - same width as photo above */}
        <div className="lg:w-2/3 bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-5">
            Travel Info
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6">
            <div className="text-gray-700 text-sm">
              Accommodation : {travelPlan.accomodationType}
            </div>

            <div className="text-gray-700 text-sm">
              Temperature : {travelPlan.weather.temperature}
            </div>

            <div className="text-gray-700 text-sm">
              Condition : {travelPlan.weather.condition}
            </div>

            {travelPlan.placesToEat.map((place) => (
              <div key={place} className="text-gray-700 text-sm">
                {place}
              </div>
            ))}

            {travelPlan.attractions.map((attraction) => (
              <div key={attraction} className="text-gray-700 text-sm">
                {attraction}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between lg:w-2/3 ">
          <Link
            to="/travels"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            ← Back to all travels
          </Link>

          <div className="flex justify-end gap-3">
            <Link to={`/travelPlans/${travelPlan.id}/edit`}>
              <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 text-sm font-medium hover:bg-gray-300 transition-colors">
                Edit
              </button>
            </Link>
            <button
              onClick={deleteTravel}
              className="px-4 py-2 rounded-md bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelDetailsPage;
