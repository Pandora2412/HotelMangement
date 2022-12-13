import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from './components/Footer';
import boxchat from "./img/boxchat.png";
import Home from './pages/Home.js';
import Booking from './pages/Booking.js';
import Services from './pages/Services.js';
import Contact from './pages/Contact.js';
import Search from './pages/Search.js';
import EmptyRoom from './pages/EmptyRoom.js';
import BookingInfo from './pages/BookingInfo.js';
import SearchPage from './pages/SearchPage.js';


function App() {


  return (
    <div className='App' style={{padding: '0px', width: '100%', margin: '0px'}}>
    {/*  HEADER */}
      <>
      <BrowserRouter>
        <div className='header'>
          <Navbar></Navbar>
          <Header></Header>
        </div>
        {/* boxchat*/} 
        <div id="boxchat"> <img src={boxchat} alt=""/></div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/booking' element={<Booking></Booking>}></Route>
            <Route path='/services' element={<Services></Services>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/search' element={<Search></Search>}></Route>
            <Route path='/emptyroom' element={<EmptyRoom></EmptyRoom>}></Route>
            <Route path='/bookinginfo' element={<BookingInfo></BookingInfo>}></Route>
            <Route path='/searchpage' element={<SearchPage></SearchPage>}></Route>
        </Routes>
      <Footer></Footer>
      
      </BrowserRouter>
      </>
      
      {/* Footer */}


    </div>

    
  );
}

export default App;
