import "./featured.css"

function Featured(){
    return(
        <div className="featured">
            <div className="featuredItem">
                <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Mumbai</h1>
                    <h2>655 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src=" https://r-xx.bstatic.com/xdata/images/city/170x136/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Bangalore</h1>
                    <h2>544 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/684682.jpg?k=30cf9de93f2a0f87eed7d2d0d9b3e6eccd5dcf3a4b68b4e0151c0800ddc84af7&o=" alt="" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Lonavala</h1>
                    <h2>749 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured