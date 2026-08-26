import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./CreatTravelPage.css"

function CreateTravelPage() {
  const navigate = useNavigate();

  const [nameofTraveller, setNameofTraveller] = useState("");
  const [travelLocation, setTravelLocation] = useState("");
  const [travelImage, setTravelImage] = useState("");
  const [accomodationType, setAccomodationType] = useState("");
  const [placesToEat, setPlaceToEat] = useState("");
  const [attractions, setAttractions] = useState("");
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState();

  const [nameofCreator, setNameofCreator] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body2 = {
        nameofCreator: nameofCreator,
        profileImage: profileImage,
        rating: rating,
      };

      const response2 = await axios.post(
        "https://travelapp-json-server.onrender.com/creators",
        body2,
      );

      const body = {
        nameofTraveller: nameofTraveller,
        travelLocation: travelLocation,
        travelImage: travelImage,
        accomodationType: accomodationType,

        placesToEat: placesToEat.split(",").map((place) => place.trim()),

        attractions: attractions
          .split(",")
          .map((attraction) => attraction.trim()),
        weather: {
          temperature: temperature,
          condition: condition,
        },

        creatorId: response2.data.id,
      };
      const response = await axios.post(
        "https://travelapp-json-server.onrender.com/travelPlans",
        body,
      );

      navigate("/travelPlans");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Create Travel Plan</h1>

      <form className="CreateTravelForm" onSubmit={handleSubmit}>
        <label>Traveller name</label>
        <input
          type="text"
          value={nameofTraveller}
          onChange={(e) => setNameofTraveller(e.target.value)}
        />

        <label>Travel location</label>
        <input
          type="text"
          value={travelLocation}
          onChange={(e) => setTravelLocation(e.target.value)}
        />

        <label>Travel image URL</label>
        <input
          type="text"
          value={travelImage}
          onChange={(e) => setTravelImage(e.target.value)}
        />

        <label>Accommodation</label>
        <input
          type="text"
          value={accomodationType}
          onChange={(e) => setAccomodationType(e.target.value)}
        />

        <label>Places to eat</label>
        <input
          type="text"
          placeholder="Restaurant A, Restaurant B"
          value={placesToEat}
          onChange={(e) => setPlaceToEat(e.target.value)}
        />

        <label>Attractions</label>
        <input
          type="text"
          placeholder="Museum A, Park B"
          value={attractions}
          onChange={(e) => setAttractions(e.target.value)}
        />

        <label>Temperature</label>
        <input
          type="text"
          placeholder="25°C"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />

        <label>Weather condition</label>
        <input
          type="text"
          placeholder="Sunny"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
        <h2>Creator information</h2>

        <label>Creator name</label>
        <input
          type="text"
          value={nameofCreator}
          onChange={(e) => setNameofCreator(e.target.value)}
        />

        <label>Creator profile image</label>
        <input
          type="text"
          value={profileImage}
          onChange={(e) => setProfileImage(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default CreateTravelPage;
