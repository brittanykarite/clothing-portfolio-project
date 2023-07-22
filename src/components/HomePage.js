import { useState } from "react"
import ClothesCard from "./ClothesCard"

export default function HomePage({ clothesList }) {
    const [styleFilter, setStyleFilter] = useState('All')

    let filteredClothes
    if (styleFilter === 'All') {
        filteredClothes = clothesList
    }
    else {
        filteredClothes = clothesList.filter(clothes => clothes.style === styleFilter)
    }  

    return (
        <div>
            <div>
                <button className='btn btn-info me-1' onClick={() => setStyleFilter('All')}>All</button>
                <button className='btn btn-info me-1' onClick={() => setStyleFilter('Dress')}>Dress</button>
                <button className='btn btn-info me-1' onClick={() => setStyleFilter('Pants')}>Pants</button>
                <button className='btn btn-info me-1' onClick={() => setStyleFilter('Sweatshirt')}>Sweatshirt</button>
                <button className='btn btn-info me-1' onClick={() => setStyleFilter('T-Shirt')}>T-Shirt</button>
            </div>
            {filteredClothes.map( c => <ClothesCard clothes={c} />)}
        </div>
    )
};

