import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import HajjForm from '../components/Forms/HajjForm';
import UmrahForm from '../components/Forms/UmrahForm';
import VisaForm from '../components/Forms/VisaForm';
import FlightForm from '../components/Forms/Flight';
import HotelForm from '../components/Forms/HotelForm';
import TransportForm from '../components/Forms/TransportForm';

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/tours' element={<Tours/>} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
         <Route path="/hajj-form" element={<HajjForm />} />
        <Route path="/umrah-form" element={<UmrahForm />} />
        <Route path="/visa-form" element={<VisaForm />} />
        <Route path="/flight-form" element={<FlightForm />} />
        <Route path="/hotel-form" element={<HotelForm />} />
        <Route path="/transport-form" element={<TransportForm />} />
      </Routes>
   )
}

export default Routers