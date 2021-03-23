import styled from "styled-components";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const StyledFooter = styled.footer`
  min-height: 70px;
  height: auto;
  background: #000000;
  color: #FFFFFF;
  width: 100vw;
  span {
    font-size: 14px;
    line-height: 24px;
    color: #D9DBE1;
    font-weight: 100;
  }
  li {
    margin: 0 10px;
  }
  @media screen and (max-width: 972px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    span {
      width: 80%;
      text-align: center;
      margin-bottom: 10px;
    }
  }
`;

const Footer = ({ siteInfo }) => {
  return (
    <StyledFooter className="flex-row flex justify-between items-center px-32">
      <span>© 2021 EmmadebbTV. All rights reserved</span>
      <ul className="flex-row flex justify-between items-center">
        <li><a href={siteInfo.facebooklink} target="new"><FaFacebook /></a></li>
        <li><a href={siteInfo.youtubelink} target="new"><FaYoutube /></a></li>
        <li><a href={siteInfo.instagramlink} target="new"><FaInstagram /></a></li>
        <li><a href={siteInfo.twitterlink} target="new"><FaTwitter /></a></li>
        <li><a href={siteInfo.linkedInlink} target="new"><FaLinkedin /></a></li>
      </ul>
    </StyledFooter>
  )
};

export default Footer;
