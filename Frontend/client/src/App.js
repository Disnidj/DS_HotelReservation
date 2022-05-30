import React, {} from  'react';
import {BrowserRouter  as Router, Routes,Route} from 'react-router-dom';


import HomeHotel from './components/HomeHotel'
import RoomsBookingByHotel from './components/RoomsBookingByHotel';
import ViewBookings from './components/ViewBookings'; 
import UpdateBookings from './components/UpdateBookings'; 
import HotelLogin from './components/HotelLogin'; 
import HotelSignup from './components/HotelSignup'; 
import TravelerLogin from './components/TravelerLogin';
import Hotel from './components/Hotel'; 
import Home from './components/Home'; 
import Register from './components/Register';
import Login from './components/Login'; 
import AdminLogin from './components/AdminLogin'; 




//disni

import TaxiBookingAdd from './components/TaxiBookingAdd';
import TaxiBookingEdit from './components/TaxiBookingEdit';
import TaxiBookingHome from './components/TaxiBookingHome';
import TaxiBookingPayment from './components/TaxiBookingPayment';

//Ramona

import HomeR from './components/HomeR';
import CreateReservation from './components/CreateReservation';
import Details from './components/Details';

//debbei

import Location from './components/Location';
import Addpayment from './components/Addpayment';
import Viewpayments from './components/Viewpayments';
import Confirmpayment from './components/Confirmpayment';
import Checkout from './components/Checkout';
import PayPal from './components/PayPal';



export default function App() {
  return (
    <div>
        <Router>
            <Routes>

                <Route   exact path = "/HomeHotel" element = {<HomeHotel/>}/>
                <Route    path = "/bookings" element = {<RoomsBookingByHotel/>}/>
                <Route    path = "/ViewBookings" element = {<ViewBookings/>}/>
                <Route    path = "/UpdateBookings/:id" element = {<UpdateBookings/>}/>
                <Route    path = "/HotelLogin" element = {<HotelLogin/>}/>
                <Route    path = "/HotelSignup" element = {<HotelSignup/>}/>
                <Route    path = "/TravelerLogin" element = {<TravelerLogin/>}/>
                <Route    path = "/Hotel" element = {<Hotel/>}/>
                <Route    path = "/" element = {<Home/>}/>
                <Route   exact path = "/Registration" element = {<Register/>}/>
                <Route    path = "/Login" element = {<Login/>}/>
                <Route    path = "/AdminLogin" element = {<AdminLogin/>}/>

                

              
                <Route   path = "/TaxiBookingHome" element = {<TaxiBookingHome/>}/>
                <Route   path = "/taxiadd" element = {<TaxiBookingAdd/>}/>
                <Route   path = "/taxiedit/:id" element = {<TaxiBookingEdit/>}/>
                <Route   path = "/taxipay" element = {<TaxiBookingPayment/>}/>


                <Route path="/HomeR" element={<HomeR/>}></Route>
                <Route path="/add" element={<CreateReservation/>}></Route>
                <Route path="/Details/:id" element={<Details/>}></Route>


                <Route path="/Location" element={<Location/>}></Route>
                <Route path="/Addpayment" element={<Addpayment/>}></Route>
                <Route path="/Viewpayments" element={<Viewpayments/>}></Route>
                <Route path="/Confirmpayment" element={<Confirmpayment/>}></Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
        </Routes>
        </Router>
    </div>
  );
}