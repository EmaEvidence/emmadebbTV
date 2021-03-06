import './App.css';
import Footer from './components/common/Footer';
import NavBar from './components/common/Nav';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="relative">
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
