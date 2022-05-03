/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../../store';

import style from './App.module.css';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import ManagerForm from '../ManagerForm/ManagerForm';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participate" element={<ManagerForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
