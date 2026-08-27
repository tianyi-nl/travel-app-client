import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import TravelCard from "../components/TravelCard";

function CreatorDetailsPage() {
  const { creatorId } = useParams();

  const [creator, setCreator] = useState(null);
  const [travelPlans, setTravelPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [creatorId]);

  const getData = async () => {
    try {
      // Get creator
      const creatorResponse = await axios.get(
        `https://travelapp-json-server.onrender.com/creators/${creatorId}`
      );

      setCreator(creatorResponse.data);

      // Get ALL travel plans created by this creator
      const travelResponse = await axios.get(
        `https://travelapp-json-server.onrender.com/travelPlans?creatorId=${creatorId}`
      );

      setTravelPlans(travelResponse.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (!creator) {
    return <h3>Creator not found</h3>;
  }

return (
  <div className="min-h-screen bg-gray-100">

    {/* Creator profile section */}
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-8 py-10">

        <div className="flex items-center gap-8">

          {/* Profile image */}
          <img
            className="w-40 h-40 rounded-full object-cover"
            src={creator.profileImage}
            alt={creator.nameofCreator}
          />

          {/* Creator information */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {creator.nameofCreator}
            </h1>

            <p className="text-gray-500 mt-2">
              Travel Creator
            </p>

            <p className="mt-4 text-lg">
              ⭐ {creator.rating}
            </p>
          </div>

        </div>

      </div>
    </section>


    {/* Travel plans section */}
    <section className="max-w-6xl mx-auto px-8 py-10">

      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Travel Plans by {creator.nameofCreator}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {travelPlans.slice(0, 2).map((travelPlan) => (
          <TravelCard
            key={travelPlan.id}
            {...travelPlan}
          />
        ))}

      </div>

    </section>


    {/* Back to creators */}
    <div className="max-w-6xl mx-auto px-8 pb-10">

      <Link
        to="/creator"
        className="text-blue-600 hover:text-blue-800"
      >
        ← Back to creators
      </Link>

    </div>

  </div>
);
}

export default CreatorDetailsPage;
