import styled from "styled-components";

const StyledDiv = styled.div`
  min-height: 60vh;
  width: 100%;
  .title {
    font-weight: 800;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #000000;
  }
  .content-wrapper {
    height: 100%;
  }
  .content {
    width: 300px;
    margin: 10px 0;
    line-height: 18px;
    font-size: 14px;
  }
  .form-wrapper {
    height: 100%;
    .form-grp {
      height: 100%;
    }
    input {
      height: 40px;
      background: #C4C4C4;
      border-radius: 10px;
      width: 100%;
      margin: 5px;
      padding: 2px 15px;
      color: #fff;
      &::placeholder {
        color: #fff;
      }
    }
    textarea {
      height: 180px;
      width: 100%;
      background: #C4C4C4;
      border-radius: 10px;
      margin: 5px;
      padding: 5px 15px;
      &::placeholder {
        color: #fff;
      }
    }
    .submit {
      width: 150px;
      height: 50px;
      background: #4169E1;
    }
  }
  @media screen and (max-width: 972px) {
    padding: 40px;
    .content-wrapper {
      flex-direction: column;
      .content {
        text-align: center;
        align-items: center;
      }
      .form-wrapper {
        width: 100%;
        padding: 0;
        form {
          width: 100%;
          margin: 0;
        }
      }
    }
  }
`;

const ContactUs = () => {
  return (
    <StyledDiv id="contactus" className="px-32 my-28">
      <span className="title">Contact Us</span>
      <div className="mt-18 flex flex-row justify-between items-center content-wrapper">
        <div className="flex flex-col justify-between items-start w-6/12 content">
          <p className="font-light">
            Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!
          </p>
          <p className="font-bold text-justify my-4">+2347033442255 +2347033442255</p>
          <p className="font-bold">email@email.com</p>
        </div>
        <div className="flex flex-row justify-end w-6/12 form-wrapper">
          <form className="flex flex-col justify-around items-center w-10/12 h-full">
            <div className="form-grp">
              <input type="text" placeholder="Firstname Lastname" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Enter your Message"></textarea>
            </div>
            <input type="submit" className="submit" value="Message Me" />
          </form>
        </div>
      </div>
    </StyledDiv>
  );
};

export default ContactUs;
