import { useState } from 'react';
import HomePage from './components/HomePage';
import OutfitPage from './components/OutfitPage';
import CleanoutPage from './components/CleanoutPage';
import { TEST_CLOTHES } from './TEST_CLOTHES';
import { Link, Route, Routes } from 'react-router-dom';
import InspirationPage from './components/InspirationPage';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

function App() {
  const [clothesList, setClothesList] = useState(TEST_CLOTHES)

  return (
    <div>
      <Container>
      <Navbar className='my-4 mt-3' color='secondary' dark>
        <NavbarBrand tag={Link} to='/'>My Inventory</NavbarBrand>
        <NavbarBrand tag={Link} to='/inspiration/:inspirationId'>Get Inspired</NavbarBrand>
        <NavbarBrand tag={Link} to='/random'>Randomize Outfit</NavbarBrand>
        <NavbarBrand tag={Link} to='/cleanout'>Cleanout Closet</NavbarBrand>
      </Navbar>
      </Container>
      <Container>
      <Routes>
        <Route path='/' element={<HomePage clothesList={clothesList} />} />
        <Route path='/random' element={<OutfitPage clothesList={clothesList} />} />
        <Route path='/inspiration/:inspirationId' element={<InspirationPage clothesList={clothesList} />} />
        <Route path='/cleanout' element={<CleanoutPage clothesList={clothesList} />} />
      </Routes>
      </Container>
    </div >
  );
}

export default App;
