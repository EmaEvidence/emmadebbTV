import styled from "styled-components";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const StyledFooter = styled.footer`
  height: 70px;
  background: #000000;
  color: #FFFFFF;
  span {
    font-size: 14px;
    line-height: 24px;
    color: #D9DBE1;
    font-weight: 100;
  }
  li {
    margin: 0 10px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter className="flex-row flex justify-between items-center px-32">
      <span>© 2021 EmmadebbTV. All rights reserved</span>
      <ul className="flex-row flex justify-between items-center">
        <li><FaFacebook /></li>
        <li><FaYoutube /></li>
        <li><FaInstagram /></li>
        <li><FaTwitter /></li>
        <li><FaLinkedin /></li>
      </ul>
    </StyledFooter>
  )
};

export default Footer;
