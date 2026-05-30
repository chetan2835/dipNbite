import { Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';
import Home from './pages/Home';
import Admin from './pages/Admin';
import './App.css'; // Empty now

function App() {
  return (
    <>
      <CustomCursor />
      <BackgroundEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
