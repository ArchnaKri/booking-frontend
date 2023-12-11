import './hotel.css'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


function Hotel(){
    const [slideNumber,setSlideNumber]=useState(0)
    const [open,setOpen]=useState(false)
    const photos=[
        {src:"https://www.booking.com/hotel/pl/32-krakow-old-town.en-gb.html?aid=2369661&label=msn-HiTydpHndf_KligNqm9Sgw-79852220055838%3Atikwd-79852393960302%3Aloc-90%3Aneo%3Amte%3Alp116072%3Adec%3AqsBooking.com&sid=cc492fd612588a28bc101f1a1f695ba2&dest_id=-510625&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1701587297&srpvid=37c2322b7b530039&type=total&ucfs=1&activeTab=main#"},
        {src:"https://www.booking.com/hotel/pl/32-krakow-old-town.en-gb.html?aid=2369661&label=msn-HiTydpHndf_KligNqm9Sgw-79852220055838%3Atikwd-79852393960302%3Aloc-90%3Aneo%3Amte%3Alp116072%3Adec%3AqsBooking.com&sid=cc492fd612588a28bc101f1a1f695ba2&dest_id=-510625&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1701587297&srpvid=37c2322b7b530039&type=total&ucfs=1&activeTab=main#"},
        {src:"https://www.booking.com/hotel/pl/32-krakow-old-town.en-gb.html?aid=2369661&label=msn-HiTydpHndf_KligNqm9Sgw-79852220055838%3Atikwd-79852393960302%3Aloc-90%3Aneo%3Amte%3Alp116072%3Adec%3AqsBooking.com&sid=cc492fd612588a28bc101f1a1f695ba2&dest_id=-510625&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1701587297&srpvid=37c2322b7b530039&type=total&ucfs=1&activeTab=main#"},
        {src:"https://www.booking.com/hotel/pl/32-krakow-old-town.en-gb.html?aid=2369661&label=msn-HiTydpHndf_KligNqm9Sgw-79852220055838%3Atikwd-79852393960302%3Aloc-90%3Aneo%3Amte%3Alp116072%3Adec%3AqsBooking.com&sid=cc492fd612588a28bc101f1a1f695ba2&dest_id=-510625&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1701587297&srpvid=37c2322b7b530039&type=total&ucfs=1&activeTab=main#"}
    ]
    const handleOpen=(i)=>{
        setSlideNumber(i)
        setOpen(true)
    }
    return(

        <div>
            <Navbar/>
            <Header type="list"/>
            <div className='hotelContainer'>
               {open && <div className='slider'>
                
                </div>}
                <div className='hotelWrapper'>
                    <button className='bookNow'>Reserve or Book Now!</button>
                    <h1 className='hotelTitle'>Grand Hotel</h1>
                    <div className='hotel Address'>
                        <FontAwesomeIcon icon ={faLocationDot}/>
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className='hotelDistance'>Excellent location - 500m from center</span>
                    <span className='hotelPriceHighlight'>Book a stay over $114 at this property and get a free airport taxi</span>
                    <div className='hotelImage'>
                        {photos.map((photo,i)=>(
                            <div className='hotelImgWrapper'>
                                <img  onClick={handleOpen}src={photo.src} alt="" className='hotelImg'/>
                            </div>
                        ))}
                    </div>
                    <div className='hotelDetails'>
                        <div className='hotelDetailsText'>
                            <h1 className='hotelTitle'>Stay in the heart of Krakow</h1>
                            <p className='hotelDesc'>
                             Wawel Boutique Residence - Krakow Old Town  is an aparthotel located in a renovated 19th century townhouse,
                             within a 5-minute walk from the vibrant Kazimierz Jewish District with its numerous shops and restaurants
                              and a 10-minute walk from the Main Market Square.
                              The aparthotel offers a seating area with a flat-screen TV and a private bathroom with a hairdryer,
                             free luxury Prija toiletries and shower. A microwave, a fridge and stovetop are also featured in the kitchen,
                              as well as a k///Guests can benefit from luggage storage, airport shuttle service and guided tours to Auschwitz-Birkenau and the
                             Wieliczka Salt Mine. Guarded parking is available at a surcharge. Wawel Royal Castle is 1.7 km from the accommodation, while Cloth Hall is 1.7 km away. The nearest airport is 
                             John Paul II International Kraków–Balice, 25 km from Wawel Boutique Residence - Krakow Old Town, and the property 
                             offers a paid airport shuttle service.
                            </p>
                        </div>
                        <div className='hotelDetailsPrice'>
                        <h1>Perfect for a 9-night stay!</h1>
                        <span>Location in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
                        <h2>
                            <b>$945</b>(9 nights)
                        </h2>
                        <button>Reserve or Book Now!</button>
                    </div>
                </div>
            </div>
            <MailList/>
            <Footer/>
        </div>
        </div>
    )
}

export default Hotel