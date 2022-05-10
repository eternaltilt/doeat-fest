/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../../redux/store/index';
import FormSets from '../FormSets/FormSets';
import AdminLogin from '../AdminLogin/AdminLogin';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Map from '../Map/Map';
import ManagerForm from '../ManagerForm/ManagerForm';
import CurrentFestCard from '../Fests/CurrentFestCard/CurrentFestCard'
import FestList from '../Fests/FestList/FestList';
import Footer from '../Footer/Footer';
import style from './App.module.css';




function App() {
  // проверка на наличие ключа в localStorage
  const [local, setLocal]= useState(false)
  useEffect(()=>{
    if(localStorage.getItem('Admin') === 'anna') {
      setLocal(true)
    }
  },[])
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar />
        <Routes>
      <Route path='/map' element={<Map/>}/>
          <Route path="/admin" element={<AdminLogin />} />
          {local?<Route path="/admin/panel" element={<FormSets />} />:<Route path="/admin/panel" element={<AdminLogin />} />}
          <Route path="/" element={<Home />} />
          {/* <Route path="/fests" element={<Fests />} /> */}
          <Route path="/participate" element={<ManagerForm />} />
          <Route path="/calendar" element={<FestList />} />
          <Route path="/calendar/:id" element={<CurrentFestCard/>} />
        </Routes>
       <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
