import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import TravelDetailsPage from "./Pages/TravelDetailsPage";
import TravelListPage from "./Pages/TravelListPage";
import ErrorPage from "./Pages/ErrorPage";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CreatorListPage from "./Pages/CreatorListPage";
import CreatorDetailsPage from "./Pages/CreatorDetailsPage";
import CreateTravelPage from "./Pages/CreateTravelPage";
import EditPage from "./Pages/EditPage";
import AboutPage from "./Pages/AboutPage"


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/travelPlans" element={<TravelListPage />} />
        <Route path="/travelPlans/:travelId" element={<TravelDetailsPage />} />
         <Route path="/travelPlans/create" element={<CreateTravelPage />} />

        <Route path="/creator" element={<CreatorListPage />} />
        <Route path="/creator/:creatorId" element={<CreatorDetailsPage />} />
         <Route path="/travelPlans/:travelId/edit" element={<EditPage />} />
        
         <Route path="/about" element={<AboutPage/>} />

        
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
