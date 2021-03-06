import styled from "styled-components";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const StyledNavBar = styled.nav`
  top: 0;
  left: 0;
  height: 70px;
  .logo {
    font-size: 24px;
  }
  li {
    margin: 0 10px;
    font-weight: 200;
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar className="flex-row flex items-center px-32 justify-between">
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center mr-10 font-bold logo">
          <span className="">AllAbout</span>
          <span>Yoruba</span>
        </div>
        <ul className="flex flex-row items-center">
          <li >About</li>
          <li>Videos</li>
          <li>Services</li>
          <li>Blogs</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <ul className="flex flex-row items-center">
        <li><FaFacebook /></li>
        <li><FaYoutube /></li>
        <li><FaInstagram /></li>
        <li><FaTwitter /></li>
        <li><FaLinkedin /></li>
      </ul>
    </StyledNavBar>
  )
};

export default NavBar;