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
  return (
    <div>
        <h1>My Clothes List</h1>
        {clothesList.map( c => <ClothesCard clothes={c} />)}
    </div>
  );
}

export default App;
