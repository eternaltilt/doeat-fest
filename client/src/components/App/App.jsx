/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../../redux/store/index';
import FormSets from '../FormSets/FormSets';
import AdminLogin from '../AdminLogin/AdminLogin';

import style from './App.module.css';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import ManagerForm from '../ManagerForm/ManagerForm';
import Fests from '../Fests/Fests';
import Footer from '../Footer/Footer';


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
          <Route path="/admin" element={<AdminLogin />} />
          {local?<Route path="/admin/panel" element={<FormSets />} />:<Route path="/admin/panel" element={<AdminLogin />} />}
          <Route path="/" element={<Home />} />
          <Route path="/fests" element={<Fests />} />
          <Route path="/participate" element={<ManagerForm />} />
        </Routes>
       <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
