import { useState } from "react";
import SearchBar from "../components/SearchBar";
import TravelListPage from "./TravelListPage";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TravelListPage searchTerm={searchTerm} />
    </div>
  );
}

export default HomePage;
