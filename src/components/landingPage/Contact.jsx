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

// contactustext: "Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!"
// created_at: "2021-03-18T11:32:00.517Z"
// crownimage: {id: 2, name: "crown.png", alternativeText: "", caption: "", width: 112, …}
// drumimage: {id: 3, name: "drum.png", alternativeText: "", caption: "", width: 128, …}
// email: "email@email.com"
// facebooklink: null
// id: 1
// instagramlink: null
// : null
// matimage: {id: 5, name: "mat.png", alternativeText: "", caption: "", width: 200, …}
// phone1: "+2347033442255"
// phone2: "+2347033442255"
// published_at: "2021-03-18T11:32:03.896Z"
// shekereimage: {id: 4, name: "shekere.png", alternativeText: "", caption: "", width: 200, …}
// tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer."
// : null
// updated_at: "2021-03-18T11:39:23.626Z"

const ContactUs = ({siteInfo}) => {
  return (
    <StyledDiv id="contactus" className="px-32 my-28">
      <span className="title">Contact Us</span>
      <div className="mt-18 flex flex-row justify-between items-center content-wrapper">
        <div className="flex flex-col justify-between items-start w-6/12 content">
          <p className="font-light">
            {siteInfo.contactustext}
          </p>
          <p className="font-bold text-justify my-4">{siteInfo.phone1} {siteInfo.phone2}</p>
          <p className="font-bold">{siteInfo.email}</p>
        </div>
        <div className="flex flex-row justify-end w-6/12 form-wrapper">
          <form onSubmit={(event) => {event.preventDefault()} } className="flex flex-col justify-around items-center w-10/12 h-full">
            <div className="form-grp">
              <input type="text" placeholder="Firstname Lastname" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Enter your Message" required></textarea>
            </div>
            <input type="submit" className="submit" value="Message Me" />
          </form>
        </div>
      </div>
    </StyledDiv>
  );
};

export default ContactUs;
