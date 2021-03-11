import styled from "styled-components"
import User from '../../assets/user.png';
import HalfCircle from '../../assets/halfCircle.png';

const StyledAbout = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #F9FAFC;
  .profile-image {
    width: 50%;
  }
  .details {
    width: 50%;
  }
  @media screen and (max-width: 972px) {
    flex-direction: column;
    padding: 40px;
    .profile-image {
      width: 100%;
    }
    .details {
      width: 100%;
      padding: 0;
      text-align: center;
    }
  }
`;

const About = () => {
  return (
    <StyledAbout id="about" className="relative px-32 flex flex-row justify-between items-center">
      <img src={HalfCircle} alt="Half Circle" className="half-circle absolute top-0 left-0" />
      <div className="profile-image">
        <img src={User} alt="Agbanimu Tunmise" />
      </div>
      <div className="details p-20 flex-col flex justify-center items-start">
        <span className="title font-bold my-4 text-3xl">Agbanimu Tunmise</span>
        <span className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
        </span>
      </div>
    </StyledAbout>
  )
};

export default About;
