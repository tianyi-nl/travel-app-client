import { Link } from "react-router-dom";

function CreatorCard({ id, nameofCreator, profileImage, rating }) {
  return (
    <div className="text-center">
      <Link to={`/creator/${id}`}>
        <img
          className="w-48 h-48 rounded-full object-cover mx-auto hover:scale-105 transition"
          src={profileImage}
          alt={nameofCreator}
        />

        <h3 className="mt-3 font-semibold text-gray-800">
          {nameofCreator}
        </h3>
      </Link>

    </div>
  );
}

export default CreatorCard;