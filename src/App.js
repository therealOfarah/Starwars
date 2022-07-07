import './App.css';
import { Routes, Route } from 'react-router-dom';
import Starships from './pages/Starships/Starships';
import StarshipsDetails from './pages/StarshipDetails/StarshipsDetail';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <> 
    <NavBar />
    <Routes>
        <Route path="/" element={<Starships />} />
        <Route path="/starship-details" element={<StarshipsDetails />} />
      </Routes>
    </>
  );
}

export default App;
