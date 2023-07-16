import VendingMachine from './VendingMachine';
import './App.css';
import Soda from './Soda';
import Chips from './Chips';
import Coffee from './Coffee';
import {Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='/' element={<VendingMachine />} />
          <Route path='/soda'element={<Soda />} />
          <Route path='/coffee' element={<Coffee />} />
          <Route path='/chips'element={<Chips />} />
        </Routes> 
    </div>
  );
}

export default App;
