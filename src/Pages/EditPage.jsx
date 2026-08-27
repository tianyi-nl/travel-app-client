import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import backgroundpic from "../assets/formpic.jpg";

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
    try { console.log("travelId:", travelId);
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
        `https://travelapp-json-server.onrender.com/travelPlans?creatorId=${creatorId}`,
      );

      const creator = response2.data;

      setCreatorId(creator.id);
      setNameofCreator(creator.nameofCreator);
      setProfileImage(creator.profileImage);

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
        `https://travelapp-json-server.onrender.com/creators/${creatorId}`,
        {
          profileImage: profileImage,
        },
      );
      navigate(`/travelPlans/${travelId}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <h3>Loading...</h3>;
const inputClass =
    "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
 
 return (
  <div className="min-h-screen bg-gray-50 py-10 px-4">
    <h1 className="text-2xl font-bold text-center mb-8">
      Edit Travel Plan
    </h1>

    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">

      {/* Left column: Travel + Creator stacked vertically */}
      <form
        onSubmit={handleFormSubmit}
        className="flex-1 flex flex-col gap-6"
      >

        {/* Travel section */}
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2">
            Travel information
          </h2>

          <div>
            <label className={labelClass}>Traveller name</label>
            <input
              type="text"
              className={inputClass}
              value={nameofTraveller}
              onChange={(e) => setNameofTraveller(e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass}>Travel location</label>
            <input
              type="text"
              className={inputClass}
              value={travelLocation}
              onChange={(e) => setTravelLocation(e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass}>Travel image URL</label>
            <input
              type="text"
              className={inputClass}
              value={travelImage}
              onChange={(e) => setTravelImage(e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass}>Accommodation</label>
            <input
              type="text"
              className={inputClass}
              value={accomodationType}
              onChange={(e) => setAccomodationType(e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass}>Places to eat</label>
            <input
              type="text"
              placeholder="Restaurant A, Restaurant B"
              className={inputClass}
              value={placesToEat}
              onChange={(e) => setPlaceToEat(e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass}>Attractions</label>
            <input
              type="text"
              placeholder="Museum A, Park B"
              className={inputClass}
              value={attractions}
              onChange={(e) => setAttractions(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Temperature</label>
              <input
                type="text"
                placeholder="25°C"
                className={inputClass}
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              />
            </div>

            <div>
              <label className={labelClass}>Weather condition</label>
              <input
                type="text"
                placeholder="Sunny"
                className={inputClass}
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              />
            </div>
          </div>
        </div>


        {/* Creator section */}
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2">
            Creator information
          </h2>

          <div>
            <label className={labelClass}>Creator name</label>
            <input
              type="text"
              className={inputClass}
              value={nameofCreator}
              onChange={(e) => setNameofCreator(e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass}>Creator profile image</label>
            <input
              type="text"
              className={inputClass}
              value={profileImage}
              onChange={(e) => setProfileImage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </div>

      </form>


      {/* Right column: static photo */}
      <div className="w-full lg:w-120 flex-shrink-0">
        <img
          src={backgroundpic}
          alt="Travel"
          className="w-full h-full object-cover object-[30%_center] rounded-lg shadow"
        />
      </div>

    </div>
  </div>
);


}

export default EditPage;
