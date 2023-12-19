import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './page/home/Home'
import List from './page/list/List'
import Hotel from './page/hotel/Hotel'
import Login from './page/list/List'

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/hotels' element={<List/>}/>
            <Route path='/hotels/:id' element={<Hotel/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App