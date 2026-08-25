
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TravelCard from "../components/TravelCard";
import "./TraveListPage.css"

function TravelListPage() {
  const [allTravelPlans, setAllTravelPlan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { getData()}, []);

  const getData = async () => {
    try {
      const response = await axios.get("https://travelapp-json-server.onrender.com/travelPlans");
      setAllTravelPlan(response.data);
      //console.log(response.data)

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="TravelListPage">
      {allTravelPlans.map((travelPlan) => {
        return <TravelCard key={travelPlan.id} {...travelPlan} />;
      })}
    </div>
  );
}

export default TravelListPage;
