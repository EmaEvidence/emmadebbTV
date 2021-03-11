import styled from "styled-components";
import Crown from "../../assets/crown.png";
import Dots from "../../assets/Dots.png";
import Drum from "../../assets/drum.png";
import Mat from "../../assets/mat.png";
import User2 from "../../assets/User2.png";
import Shekere from "../../assets/shekere.png";

const StyledDiv = styled.div`
  height: 100vh;
  width: 100%;
  .left {
    width: 60%;
    height: 100%;
    .title {
      font-weight: 800;
      font-size: 60px;
      line-height: 62px;
      color: #18191F;
      width: 400px;
    }
    .tagline {
      font-size: 18px;
      line-height: 32px;
      color: #18191F;
      width: 70%;
    }
    button {
      width: 196px;
      height: 50px;
      background: #4169E1;
      border-radius: 8px;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      color: #FFFFFF;
    }
  }
  .right {
    background: #18191F;
    width: 40%;
    .mat {
      width: 150px;
      height: 150px;
      background: green;
      border-radius: 100px;
      top: 20px;
      left: 20px;
    }
    .drum {
      width: 100px;
      height: 100px;
      background: #4169E1;
      border-radius: 100px;
      left: -50px;
      top: 200px;
    }
    .image {
      width: 150px;
      height: 150px;
      background: yellow;
      border-radius: 100px;
      left: 200px;
      top: 200px;
      position: relative;
      .user {
        position: absolute;
        top: 10px;
        left: 10px;
      }
    }
    .shekere {
      width: 150px;
      height: 150px;
      background: red;
      border-radius: 100px;
      left: 250px;
      top: 450px;
    }
    .crown {
      width: 112px;
      height: 112px;
      background: brown;
      border-radius: 100px;
      left: 50px;
      top: 400px;
    }
  }
  @media screen and (max-width: 972px) {
    flex-direction: column-reverse;
    .right {
      height: 60vh;
      width: 100vw;
      .mat {
        width: 75px;
        height: 75px;
      }
      .drum {
        width: 50px;
        height: 50px;
      }
      .image {
        width: 120px;
        height: 120px;
        left: 160px;
        top: 50px;
      }
      .shekere {
        width: 75px;
        height: 75px;
        left: 200px;
        top: 200px;
      }
      .crown { 
        width: 55px;
        height: 55px;
        left: 50px;
        top: 150px;
      }
    }
    .left {
      height: 40vh;
      width: 100vw;
      padding: 40px;
      justify-content: center;
      align-items: center;
      .title {
        font-size: 24px;
        width: 90%;
        line-height: 26px;
        text-align: center;
      }
      .tagline {
        font-size: 12px;
        text-align: center;
        line-height: 14px
      }
      button {
        width: 120px;
        font-size: 14px;
      }
    }
  }
`;

const Hero = () => {
  return (
    <StyledDiv className="flex flex-row">
      <div className="left flex flex-col items-start justify-center pl-32">
        <span className="title my-4">
          Yoruba Language Made Easy
        </span>
        <span className="tagline my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</span>
        <button>Get Started</button>
      </div>
      <div className="right h-full relative">
        <div className="mat absolute">
          <img src={Mat} alt="Mat" />
        </div>
        <div className="drum absolute">
          <img src={Drum} alt="Drum" />
        </div>
        <div className="image absolute">
          <img src={Dots} alt="Dots" />
          <img src={User2} className="user" alt="Agbanimu Tunmise" />
        </div>
        <div className="shekere absolute"><img src={Shekere} alt="Shekere" /></div>
        <div className="crown absolute"><img src={Crown} alt="Crown" /></div>
      </div>
    </StyledDiv>
  )
};

export default Hero;
