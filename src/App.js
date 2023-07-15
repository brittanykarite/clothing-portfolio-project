import { useState } from 'react'
import HomePage from './components/HomePage'
import OutfitPage from './components/OutfitPage'
import { TEST_CLOTHES } from './TEST_CLOTHES'
// import ClothesCard from './components/ClothesCard'
import { Link, Route, Routes } from 'react-router-dom'

function App() {  
  const [clothesList, setClothesList] = useState( TEST_CLOTHES )

  return (
    <div>
        <h1>My Clothes List</h1>
        <Link to='/' className='btn-link me-3'>Home</Link>
        <Link to='/random' className='btn-link'>Random Outfit</Link>
        <Routes>
          <Route path='/' element={ <HomePage clothesList={clothesList} /> } />
          <Route path='/random' element={ <OutfitPage clothesList={clothesList} /> } />
        </Routes>
    </div>
  );
}

export default App;
