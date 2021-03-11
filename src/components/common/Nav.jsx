import styled from "styled-components";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import {HashLink} from "react-router-hash-link";
import { useState } from "react";

const StyledNavBar = styled.nav`
  top: 0;
  left: 0;
  height: 70px;
  width: 100vw;
  position: fixed;
  background: #FFFFFF;
  z-index: 9999;
  .logo {
    font-size: 24px;
  }
  li {
    margin: 0 10px;
    font-weight: 200;
    cursor: pointer;
    &:hover {
      color: #4169E1
    }
  }
  .mobile-menu {
    display: none;
  }
  .open-btn {
    display: none;
  }
  @media screen and (max-width: 972px) {
    padding: 0 40px;
    .open-btn {
      display: flex;
    }
    .items, .social-links {
      display: none;
    }
    .mobile-menu {
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 250px;
      position: absolute;
      top: 0;
      right: 0;
      background: #FFFFFF;
      border: 1px solid red;
      .items, .social-links {
        display: flex;
      }
      .items {
        flex-direction: column;
        margin-bottom: 30px;
      }
    }
    .mobile-menu-open {
      width: 25px;
      height: 25px;
    }
  }
`;

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <StyledNavBar className="flex-row flex items-center px-32 justify-between">
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center mr-10 font-bold logo">
          <span className="">AllAbout</span>
          <span>Yoruba</span>
        </div>
        <ul className="flex flex-row items-center items">
          <HashLink to="" scroll={(el) => el.scrollIntoView({behavior: 'smooth', block: 'start'})}>
            <li >About</li>
          </HashLink>
          <HashLink to="" scroll={(el) => el.scrollIntoView({behavior: 'smooth', block: 'start'})}>
            <li>Videos</li>
          </HashLink>
          <HashLink to="" scroll={(el) => el.scrollIntoView({behavior: 'smooth', block: 'start'})}>
            <li>Blogs</li>
          </HashLink>
          <HashLink to="" scroll={(el) => el.scrollIntoView({behavior: 'smooth', block: 'start'})}>
            <li>Contact Us</li>
          </HashLink>
        </ul>
      </div>
      <ul className="flex flex-row items-center social-links">
        <li><FaFacebook /></li>
        <li><FaYoutube /></li>
        <li><FaInstagram /></li>
        <li><FaTwitter /></li>
        <li><FaLinkedin /></li>
      </ul>
      <button className="open-btn" onClick={() => setOpenMenu(!openMenu)}>
        <BiMenu className="mobile-menu-open" />
      </button>
      {
        openMenu && (
          <div className="mobile-menu">
            <button className="absolute top-5 right-5" onClick={() => setOpenMenu(!openMenu)}>
              <AiOutlineClose className="mobile-menu-open" />
            </button>
            <ul className="flex flex-row items-center items">
              <HashLink to="" scroll={(el) => el.scrollIntoView({behavior: 'smooth', block: 'start'})}>
                <li >About</li>
              </HashLink>
              <HashLink to="" scroll={(el) => el.scrollIntoView({behavior: 'smooth', block: 'start'})}>
                <li>Videos</li>
              </HashLink>
              <HashLink to="" scroll={(el) => el.scrollIntoView({behavior: 'smooth', block: 'start'})}>
                <li>Blogs</li>
              </HashLink>
              <HashLink to="" scroll={(el) => el.scrollIntoView({behavior: 'smooth', block: 'start'})}>
                <li>Contact Us</li>
              </HashLink>
            </ul>
            <ul className="flex flex-row items-center social-links">
              <li><FaFacebook /></li>
              <li><FaYoutube /></li>
              <li><FaInstagram /></li>
              <li><FaTwitter /></li>
              <li><FaLinkedin /></li>
            </ul>
          </div>
        )
      }
    </StyledNavBar>
  )
};

export default NavBar;