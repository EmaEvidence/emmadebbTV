import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/common/Footer';
import NavBar from './components/common/Nav';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <NavBar />
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
