import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import TravelDetailsPage from "./Pages/TravelDetailsPage";
import TravelListPage from "./Pages/TravelListPage";
import ErrorPage from "./Pages/ErrorPage"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
   

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/travelPlans" element={<TravelListPage />} />
        <Route path="/travelPlans/:travelId" element={<TravelDetailsPage />} />

        <Route path={"*"} element={<ErrorPage />} />
      </Routes>

         <Footer />
    </>
  );
}

export default App;
