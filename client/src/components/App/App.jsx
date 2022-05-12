/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormSets from '../FormSets/FormSets';
import AdminLogin from '../AdminLogin/AdminLogin';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Map from '../Map/Map';
import ManagerForm from '../ManagerForm/ManagerForm';
import CurrentFestCard from '../Fests/CurrentFestCard/CurrentFestCard';
import RestaurantCurrentCard from '../Restaurants/RestaurantCurrentCard/RestaurantCurrentCard';
import FestList from '../Fests/FestList/FestList';
import Footer from '../Footer/Footer';
import style from './App.module.css';
import AdminCommentApproval from '../AdminCommentApproval/AdminCommentApproval';
import Info from '../Info/Info';

function App() {

  // проверка на наличие ключа в localStorage
  const [local, setLocal] = useState(false);
  const {AdminSession} = useSelector(state=> state.loginReducer?.user)

  useEffect(() => {
    if (localStorage.getItem('Admin') === 'anna') {
      setLocal(true);
    }
  }, [AdminSession]);

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/map" element={<Map />} />
          <Route path="/admin" element={<AdminLogin />} />
          {local ? <>
          <Route path="/admin/panel" element={<FormSets />} />
          <Route path='/admin/comments' element={<AdminCommentApproval />} /></>:
          <Route path="/" element={<Home />} />}

          <Route path="/" element={<Home />} />
          {/* <Route path="/fests" element={<Fests />} /> */}
          <Route path="/participate" element={<ManagerForm />} />
          <Route path="/calendar" element={<FestList />} />
          <Route path="/calendar/:id" element={<CurrentFestCard />} />
          <Route path="/calendar/:id/:restId" element={<RestaurantCurrentCard />} />
          <Route path="/info" element={<Info />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
