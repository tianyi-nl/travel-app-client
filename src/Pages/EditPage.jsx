import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function EditPage() {
  const navigate = useNavigate();
  const { travelId } = useParams();

  const [nameofTraveller, setNameofTraveller] = useState("");
  const [travelLocation, setTravelLocation] = useState("");
  const [travelImage, setTravelImage] = useState("");
  const [accomodationType, setAccomodationType] = useState("");
  const [placesToEat, setPlaceToEat] = useState("");
  const [attractions, setAttractions] = useState("");
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState();

  const [creatorId, setCreatorId] = useState("");
  const [nameofCreator, setNameofCreator] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [rating, setRating] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [travelId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://travelapp-json-server.onrender.com/travelPlans/${travelId}`,
      );
      setNameofTraveller(response.data.nameofTraveller);
      setTravelLocation(response.data.travelLocation);
      setTravelImage(response.data.travelImage);
      setAccomodationType(response.data.accomodationType);
      setPlaceToEat(response.data.placesToEat.join(", "));
      setAttractions(response.data.attractions.join(", "));
      setTemperature(response.data.weather.temperature);
      setCondition(response.data.weather.condition);
      const creatorId = response.data.creatorId;
      
      setCreatorId(creatorId);
      
      const response2 = await axios.get(
        `https://travelapp-json-server.onrender.com/creator/${creatorId}`,
      );
      
      setNameofCreator(response2.data.nameofCreator);
      setProfileImage(response2.data.profileImage);

      
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
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
        creatorId,
      };
      const response = await axios.put(
        `https://travelapp-json-server.onrender.com/travelPlans/${travelId}`,
        body,
      );

      await axios.patch(
        `https://travelapp-json-server.onrender.com/creator/${creatorId}`,
        {
          profileImage: profileImage,
        },
      );
      navigate(`/travelPlans/${travelId}`);
    } catch (error) {console.log(error)}
  };

  if (isLoading) return <h3>Loading...</h3>;
  return (
    <div>
      <h1>Create Travel Plan</h1>

      <form className="CreateTravelForm" onSubmit={handleFormSubmit}>
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
        <input type="text" value={nameofCreator} readOnly />

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

export default EditPage;
