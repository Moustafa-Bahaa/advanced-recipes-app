import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Food from './components/food/Food';
import Pizzas from './components/food/Pizzas';
import Burger from './components/food/Burger';
import AddPizza from './components/food/add/AddPizza';
import AddBurger from './components/food/add/AddBurger';


function App() {
  return (
    <div className="App">
      <Header />
      <Food/>
      <div>
        <Routes>
          <Route path='/pizza' element={<Pizzas />} />
          <Route path='/burger' element={<Burger />} />
          <Route path='/addPizza' element={<AddPizza/>}/>
          <Route path='/addBurger' element={<AddBurger/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
