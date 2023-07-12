import { useState } from 'react'
import ClothesCard from './components/ClothesCard'
import { TEST_CLOTHES } from './TEST_CLOTHES'
import HomePage from './components/HomePage'
import InspirationPage from './components/InspirationPage'
import ShoppingPage from './components/ShoppingPage'

function App() {  
  const [clothesList, setClothesList] = useState( TEST_CLOTHES )

  return (
    <div>
        <h1>My Clothes List</h1>

        <HomePage clothesList={clothesList}/>
    </div>
  );
}

export default App;
