import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './componentes/Home';
import Prueba from './componentes/Prueba';

const App = () => {
  return(
  <div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/prueba" element={<Prueba/>} />
      </Routes>
  </div>
  );
  }

  

export default App;
