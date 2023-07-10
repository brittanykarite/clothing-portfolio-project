
function ClothesCard (props) {
    return (
        <div className='bg-light border p-4 m-2'> 
          <h4>{props.clothes.category}</h4>
          <p>{props.clothes.style}</p>
          <p>{props.clothes.size}</p>
        </div>
    )
}

export default ClothesCard;