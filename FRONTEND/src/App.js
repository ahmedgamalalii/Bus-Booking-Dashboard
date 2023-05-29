import React from 'react'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import ManageTraveler from './pages/manageTraveler/ManageTraveler'
import TravelerHistory from './pages/travelerHistory/TravelerHistory'
import Approval from './pages/approval/Approval'
import Header from './shared/header/Header'
import Footer from './shared/footer/Footer'
import UpdateTraveler from './pages/manageTraveler/UpdateTraveler'
import ManageAppointments from './pages/manageAppointments/ManageAppointments'
import AddAppointment from './pages/manageAppointments/AddAppointment'
import ViewAppointment from './pages/manageAppointments/ViewAppointment'
import Login from './pages/Auth/Login'
import HomeGuest from './pages/home/HomeGuest'
//import AddProduct from './pages/home/AddProduct'

import Register from './pages/Auth/Register'
import UpdateAppointment from './pages/manageAppointments/UpdateAppointment'
import RequestAppointment from './pages/home/RequestAppointment'
const App = () => {

  return (

    <div className='App'>
      <Header/>
      <Router>
        <Routes>
          <Route exact path='home' element={<HomeGuest />} />
          <Route exact path='manage' element={<ManageTraveler />} />
          <Route exact path='history' element={<TravelerHistory />} />
          <Route exact path='approval' element={<Approval />} />
          <Route exact path='appointment' element={<ManageAppointments />} />
          <Route exact path='appointment/add' element={<AddAppointment />} />
          <Route exact path='manage/:UpdateTravelerID' element={<UpdateTraveler />} />
          <Route exact path='appointment/:ViewAppointment' element={<ViewAppointment />} />
          <Route exact path='appointment/update/:id' element={<UpdateAppointment />} />
          <Route exact path='homeGuest/request' element={< RequestAppointment/>} />
          <Route exact path='login' element={<Login />} />
          <Route exact path='register' element={<Register />} />
          
        </Routes>

      </Router>
      <Footer/>
    </div>

  )

}   
           
export default App;