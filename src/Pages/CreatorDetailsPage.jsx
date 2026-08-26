import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
    <div>
      <h1>{creator.nameofCreator}</h1>

      <img
        src={creator.profileImage}
        alt={creator.nameofCreator}
      />

      <p>Rating: {creator.rating}</p>

      <hr />

      <h2>Travel Plans created by {creator.nameofCreator}</h2>

      {travelPlans.map((travelPlan) => (
        <div key={travelPlan.id}>
          <h3>{travelPlan.travelLocation}</h3>

          <img
            src={travelPlan.travelImage}
            alt={travelPlan.travelLocation}
          />

          <p>{travelPlan.accomodationType}</p>

          <Link to={`/travelPlans/${travelPlan.id}`}>
            View Travel Plan
          </Link>
        </div>
      ))}

      <br />

      <Link to="/creator">
        Back to creators
      </Link>
    </div>
  );
}

export default CreatorDetailsPage;
