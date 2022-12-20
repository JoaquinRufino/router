import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './componentes/Home';
import Prueba from './componentes/Prueba';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return(
    <div>
  <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/prueba" element={<Prueba/>} />
        </Routes>
  </BrowserRouter>
    </div>
    );
    }
  

export default App;
