import About from "../components/landingPage/About";
import Blogs from "../components/landingPage/Blogs";
import ContactUs from "../components/landingPage/Contact";
import Hero from "../components/landingPage/Hero";
import Videos from "../components/landingPage/Videos";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Videos />
      <Blogs />
      <ContactUs />
    </>
  )
}

export default LandingPage;
