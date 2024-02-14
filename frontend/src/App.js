import './App.css';
import Header from './Components/Header';
import { Route, Routes,Router,Link } from "react-router-dom";
import Home from './Components/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Councellor from './Components/Councellor';
import Visitor from './Components/Visitor';
import Appointment from './Components/Appointment';
import Hello from './Components/Hello';
import Greet from './Components/Greet';
import React from 'react';
import FetchRegistrations from './Components/FetchRegistrations';


function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact />    
        <Route path='/Signup' element={<Signup/>} exact/>
        <Route path='/Signin' element={<Signin/>} exact/>
        <Route path='/Councellor' element={<Councellor/>} exact/>
        <Route path="/fetch" element={<FetchRegistrations/>} exact/>
        <Route path='/Visitor' element={<Visitor/>} exact/>
        <Route path='/Appointment' element={<Appointment/>} exact/>
        <Route path='/Hello' elemnt={<Hello/>} exact/>
        <Route path='/Greet' element={<Greet/>} exact/>
        

       
      </Routes>

    </main>
  </React.Fragment>
}


export default App;
