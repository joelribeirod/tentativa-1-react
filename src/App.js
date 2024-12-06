import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './componentes/Header';
import Sobre from './componentes/Sobre';
import Home from './componentes/Home';
import Footer from './componentes/Footer';
import './App.css';


function App() {
  return (
    <div> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<Sobre />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
