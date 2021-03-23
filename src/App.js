import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from "react";
import './App.css';
import Footer from './components/common/Footer';
import NavBar from './components/common/Nav';
import LandingPage from './pages/LandingPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [siteInfo, setInfo] = useState({});
  useEffect(() => {
    axios.get('https://emmadebb.herokuapp.com/siteinfo')
    .then((response) => {
      setInfo(response.data)
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="w-screen  h-screen flex flex-row justify-center items-center">
        <div className="flex flex-row items-center mr-10 font-bold logo">
          <span className="">AllAbout</span>
          <span>Yoruba</span>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="relative">
        <NavBar siteInfo={siteInfo} />
        <Switch>
          <Route path="/" component={() => <LandingPage siteInfo={siteInfo} />} />
        </Switch>
        <Footer siteInfo={siteInfo} />
      </div>
    </BrowserRouter>
  );
}

export default App;
