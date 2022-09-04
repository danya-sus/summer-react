import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EpisodeMenu from './components/EpisodeMenu';
import QuoteMenu from './components/QuoteMenu';
import CharacterMenu from './components/CharacterMenu';
import Navigation from './components/Navigation';
import Character from './components/Character';

function App() {
  return (
    <div className="App" id='mainPage'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<CharacterMenu />} />
        <Route path="/characters/:characterId/*" element={<Character />} />
        <Route path='/episodes' element={<EpisodeMenu />} />
        <Route path='/quotes' element={<QuoteMenu />} />
      </Routes>
    </div>
  );
}

export default App;
