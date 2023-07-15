export default function OutfitPage({ clothesList }) {
    
    const randomOutfit = clothesList[ Math.floor(Math.random() * clothesList.length)]
    return (
        <div>
            <h5>This is what you should wear today!</h5>
            <h2 className='display-1'>{ randomOutfit.style }</h2>
        </div>
    )
}