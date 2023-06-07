import './App.css';
import './Style/Style.css'
import './Style/Responsive.css'
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
