import styled from "styled-components"

const StyledContentWraper = styled.div`
  width: 100%;
  height: 100%;
  .title {
    font-weight: 800;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #000000;
  }
  .content-wrapper {
    height: 90%;
  }
  .button-wrapper {
    button {
      height: 40px;
      width: 40px;
      border-radius: 20px;
      color: #ffffff;
      background: #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
    }
  }
`;

const ContentWraper = ({data, renderComponent, title}) => {
  return (
    <StyledContentWraper className="">
      <span className="title my-20">{title}</span>
      <div className="content-wrapper mt-5 flex flex-row flex-wrap justify-center items-center px-7">
        {
          data.map((item) => (
            renderComponent(item)
          ))
        }
      </div>
      <div className="flex flex-row justify-end items-center">
        <span>1 of 6</span>
      </div>
      <div className="button-wrapper flex flex-row justify-center items-center">
        <button>{'<'}</button>
        <button>{'>'}</button>
      </div>
    </StyledContentWraper>
  )
}

export default ContentWraper;
