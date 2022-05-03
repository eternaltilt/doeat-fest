import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { store } from '../../redux/store/store';
import FormSets from '../FormSets/FormSets';
import AdminLogin from '../AdminLogin/AdminLogin';

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
        <div className="App">Hello 123 World</div>
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          {local?<Route path="/admin/panel" element={<FormSets />} />:<Route path="/admin/panel" element={<AdminLogin />} />}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
