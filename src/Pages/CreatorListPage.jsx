import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreatorCard from "../components/CreatorCard";

function CreatorListPage() {
  const [allCreator, setAllCreator] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://travelapp-json-server.onrender.com/creators",
      );

      setAllCreator(response.data);
      setIsLoading (false)
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <h3>loading</h3>;

  return (
     <div className="p-8">

    <h1 className="text-3xl font-bold mb-8">
      Creators
    </h1>

    <div className="flex gap-16 flex-wrap">
      {allCreator.map((creator) => {
        return (
          <CreatorCard
            key={creator.id}
            {...creator}
          />
        );
      })}
    </div>

  </div>
  );
}

export default CreatorListPage;
