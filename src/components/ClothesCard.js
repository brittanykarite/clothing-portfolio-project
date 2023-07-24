import { Link } from "react-router-dom";

function ClothesCard ({ clothes }) {
    return (
        <div className='bg-light border p-4 m-2'> 
          <h4>{clothes.style}</h4>
          <p>{clothes.category}</p>
          <p>{clothes.size}</p>
          <Link to={'/clothes/' + clothes.id}>Details</Link>
        </div>
    )
}

export default ClothesCard;