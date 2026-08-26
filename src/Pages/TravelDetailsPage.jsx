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
    <div className="TravelDetailsPage">
      <h1>{travelPlan.travelLocation}</h1>

      <p>Travelled by {travelPlan.nameofTraveller}</p>

      <img src={travelPlan.travelImage} alt={travelPlan.travelLocation} />

      <h2>Accommodation</h2>
      <p>{travelPlan.accomodationType}</p>

      <h2>Places to Eat</h2>
      <ul>
        {travelPlan.placesToEat.map((place) => (
          <li key={place}>{place}</li>
        ))}
      </ul>

      <h2>Attractions</h2>
      <ul>
        {travelPlan.attractions.map((attraction) => (
          <li key={attraction}>{attraction}</li>
        ))}
      </ul>

      <h2>Weather</h2>
      <p>Temperature: {travelPlan.weather.temperature}</p>

      <p>Condition: {travelPlan.weather.condition}</p>

      <Link to="/travels">Back to all travels</Link>
      <Link to ={`/travelPlans/${travelPlan.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={deleteTravel}>Delete</button>
    </div>
  );
}

export default TravelDetailsPage;
