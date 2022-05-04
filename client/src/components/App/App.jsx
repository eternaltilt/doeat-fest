import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../../store';
import Fests from '../Fests/Fests';
import Footer from '../Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">Hello 123 World</div>
        <Routes>
          <Route path="/fests" element={<Fests />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
