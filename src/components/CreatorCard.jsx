import { Link } from "react-router-dom"

function CreatorCard({id, nameofCreator, profileImage,travelPlanId,rating}) {
  return (
    <div>
<Link to ={`/creator/${id}`}> <h3>{nameofCreator}</h3>
</Link>

<img className="TravelCard-image"
        src={profileImage}
        alt={nameofCreator}/>

        <p>{rating}</p>





    </div>
  )
}

export default CreatorCard