import { useState } from "react"
import ClothesCard from "./ClothesCard"

export default function HomePage({ clothesList }) {
    const [categoryFilter, setCategoryFilter] = useState('All')

    let filteredClothes
    if (categoryFilter === 'All') {
        filteredClothes = clothesList
    }
    else {
        filteredClothes = clothesList.filter(clothes => clothes.category === categoryFilter)
    }  

    return (
        <div>
            <div>
                <button className='btn btn-info me-1' onClick={() => setCategoryFilter('All')}>All</button>
                <button className='btn btn-info me-1' onClick={() => setCategoryFilter('Spring')}>Spring</button>
                <button className='btn btn-info me-1' onClick={() => setCategoryFilter('Summer')}>Summer</button>
                <button className='btn btn-info me-1' onClick={() => setCategoryFilter('Fall')}>Fall</button>
                <button className='btn btn-info me-1' onClick={() => setCategoryFilter('Winter')}>Winter</button>
            </div>
            {filteredClothes.map( c => <ClothesCard clothes={c} />)}
        </div>
    )
};

