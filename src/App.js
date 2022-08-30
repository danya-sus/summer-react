import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EpisodeList from './components/Episode';
import QuoteList from './components/Quote';
import CharacterMenu from './components/Character';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/characters" element={<CharacterMenu />} />
        <Route path="/episodes" element={<EpisodeList />} />
        <Route path='/quotes' element={<QuoteList />} />
      </Routes>
    </div>
  );
}

export default App;
