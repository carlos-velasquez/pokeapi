import './style.css';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PokemonSelect from './components/Pokemones';
import InformacionPokemon from './components/InformacionPokemon';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonSelect />} />
          <Route path="/pokemon/:id" element={<InformacionPokemon />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
