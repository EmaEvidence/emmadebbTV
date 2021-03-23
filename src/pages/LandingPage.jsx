import About from "../components/landingPage/About";
import Blogs from "../components/landingPage/Blogs";
import ContactUs from "../components/landingPage/Contact";
import Hero from "../components/landingPage/Hero";
import Videos from "../components/landingPage/Videos";

const LandingPage = ({
  siteInfo,
}) => {
  return (
    <div className="mt-14">
      <Hero siteInfo={siteInfo} />
      <About siteInfo={siteInfo} />
      <Videos />
      <Blogs />
      <ContactUs siteInfo={siteInfo} />
    </div>
  )
}

export default LandingPage;
