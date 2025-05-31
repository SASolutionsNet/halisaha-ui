import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginUser from './pages/LoginUser/LoginUser';
import LoginOwner from './pages/LoginOwner/LoginOwner';
import PlayerRegister from './pages/PlayerRegister/PlayerRegister'; // ✅ yeni sayfa

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginUser />} />
      <Route path="/owner-login" element={<LoginOwner />} />
      <Route path="/register" element={<PlayerRegister />} /> {/* ✅ yeni rota */}
    </Routes>
  );
}

export default App;
