import { useState } from 'react';
import ClothesCard from './ClothesCard'

const clothesList = [
  {
    id: 0,
    category: 'Summer',
    size: 'Medium',
    style: 'Dress'
  },
  {
    id: 1,
    category: 'Fall',
    size: 'Medium',
    style: 'Pants'
  },
  {
    id: 2,
    category: 'Winter',  
    size: 'X-Large',
    style: 'Sweatshirt'
  },
  {
    id: 3,
    category: 'Spring',
    size: 'Medium',
    style: 'T-Shirt'
  },
]

function App() {
  const [styleFilter, setStyleFilter] = useState('Pants')

  let filteredClothes
  
  if (styleFilter === 'All') {
    filteredClothes = clothesList
  }
  else {
    filteredClothes = clothesList.filter(clothes => clothes.style === styleFilter)
  }  

  return (
    <div>
        <h1>My Clothes List</h1>
        <div>
          <button className='btn btn-info me-1' onClick={() => setStyleFilter('All')}>All</button>
          <button className='btn btn-info me-1' onClick={() => setStyleFilter('Medium')}>Medium</button>
          <button className='btn btn-info me-1' onClick={() => setStyleFilter('X-Large')}>X-Large</button>
        </div>
        {filteredClothes.map( c => <ClothesCard clothes={c} />)}
    </div>
  );
}

export default App;
