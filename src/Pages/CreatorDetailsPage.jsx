import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function CreatorDetailsPage() {
  const { creatorId } = useParams();

  const [creator, setCreator] = useState(null);
  const [travelPlan, setTravelPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [creatorId]);

  const getData = async () => {
    try {
      // Get creator
      const creatorResponse = await axios.get(
        `https://travelapp-json-server.onrender.com/creator/${creatorId}`
      );

      setCreator(creatorResponse.data);

      // Get travel plan created by this creator
      const travelResponse = await axios.get(
        `https://travelapp-json-server.onrender.com/travelPlans/${creatorResponse.data.travelPlanId}`
      );

      setTravelPlan(travelResponse.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (!creator || !travelPlan) {
    return <h3>Data not found</h3>;
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

     

      <h2>Travel Plan</h2>

      <h3>{travelPlan.travelLocation}</h3>

      <img
        src={travelPlan.travelImage}
        alt={travelPlan.travelLocation}
      />

      <p>{travelPlan.accomodationType}</p>

      <Link to="/creator">
        Back to creators
      </Link>
    </div>
  );
}

export default CreatorDetailsPage;
