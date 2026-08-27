import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import backgroundpic from "../assets/formpic.jpg";

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
  const inputClass =
    "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

 return (
  <div className="min-h-screen bg-gray-50 py-10 px-4">
    <h1 className="text-2xl font-bold text-center mb-8">
      Edit Travel Plan
    </h1>

    <form
      onSubmit={handleFormSubmit}
      className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6"
    >
      {/* Left column: Travel + Creator stacked vertically */}
      <div className="flex-1 flex flex-col gap-6">

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
      </div>


      {/* Right column: same static photo as Create page */}
      <div className="w-full lg:w-120 flex-shrink-0">
        <img
          src={backgroundpic}
          alt="Travel"
          className="w-full h-full object-cover object-[30%_center] rounded-lg shadow"
        />
      </div>

    </form>
  </div>
);
}


export default CreateTravelPage;
