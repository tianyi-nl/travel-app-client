
import { useState, useEffect } from "react";
import axios from "axios";
import TravelCard from "../components/TravelCard";
import "./TraveListPage.css";

function TravelListPage({ searchTerm = "" }) {
  const [allTravelPlans, setAllTravelPlan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://travelapp-json-server.onrender.com/travelPlans"
        );
        setAllTravelPlan(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const filteredTravelPlans = allTravelPlans.filter((travelPlan) => {
    const searchValue = searchTerm.toLowerCase();
    const destination = travelPlan.travelLocation?.toLowerCase() || "";
    const traveller = travelPlan.nameofTraveller?.toLowerCase() || "";

    return destination.includes(searchValue) || traveller.includes(searchValue);
  });

  if (isLoading) {
    return <p>Loading travel plans...</p>;
  }

  if (filteredTravelPlans.length === 0) {
    return <p>No travel plans found for "{searchTerm}".</p>;
  }

  return (
    <div className="TravelListPage">
      {filteredTravelPlans.map((travelPlan) => {
        return <TravelCard key={travelPlan.id} {...travelPlan} />;
      })}
    </div>
  );
}

export default TravelListPage;
