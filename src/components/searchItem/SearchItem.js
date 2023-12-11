import './searchItem.css'

function SearchItem(){
    return(
        <div className='searchItem'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/389783643.webp?k=2d6db25929daf2719526e9d9fe2534bf3363476d31b1ff0a412d5773d4d1967a&o=" 
            alt="" 
            className='siImg'/>
            <div className='siDesc'>
                <h1 className='siTitle'>Tower Street Apartments</h1>
                <span className='siDistance'>500m from center</span>
                <span className='siTaxiOp'>Free airport taxi</span>
                <span className='siSubtitle'>Studio Apartment with Air conditioning</span>
                <span className='siFeatures'>Entire studio - 1 bathroom -21m 1 full bed</span>
                <span className='siCancelOp'>Free Cancellation</span>
                <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great pric today!</span>
            </div>
            <div className='siDetails'>
                <div className='siRating'>
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
        
            <div className='siDetailTexts'>
                <span className='siPrice'>$123</span>
                <span className='siTaxiOp'>Includes taxes and fees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
        </div>
    )
}

export default SearchItem