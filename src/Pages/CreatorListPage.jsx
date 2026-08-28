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
  <div className="px-4 py-8 sm:px-6 lg:px-8">
    
    <div className="max-w-6xl mx-auto">

      <h1 className="text-3xl ml-[48px] font-bold mb-8">
        Creators
      </h1>

      <div className="flex justify-center gap-8 flex-wrap">
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

  </div>
);
}

export default CreatorListPage;
