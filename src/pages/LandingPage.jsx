import About from "../components/landingPage/About";
import Blogs from "../components/landingPage/Blogs";
import ContactUs from "../components/landingPage/Contact";
import Hero from "../components/landingPage/Hero";
import Videos from "../components/landingPage/Videos";

const LandingPage = () => {
  return (
    <div className="mt-14">
      <Hero id="hero" />
      <About id="about" />
      <Videos id="videos" />
      <Blogs id="blogs" />
      <ContactUs id="contactus" />
    </div>
  )
}

export default LandingPage;
