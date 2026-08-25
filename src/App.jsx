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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/travelPlans" element={<TravelListPage />} />
        <Route path="/travelPlans/:travelId" element={<TravelDetailsPage />} />

        <Route path="/creator" element={<CreatorListPage />} />
        <Route path="/creator/:creatorId" element={<CreatorDetailsPage />} />

        
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
