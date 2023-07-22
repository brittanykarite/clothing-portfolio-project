import { useParams } from "react-router-dom"

export default function InspirationPage({ clothesList }) {
    let { inspirationId }  = useParams()
    inspirationId = parseInt(inspirationId)

    const clothes = clothesList.find(c => c.id === inspirationId)

    if(!clothes) {
        return <h2>Clothing not found</h2>
    }

    return (
        <div>
            <h3>{clothes.category}</h3>
            <p>{clothes.style}</p>
            <p>{clothes.size}</p>
        </div>
    )
};