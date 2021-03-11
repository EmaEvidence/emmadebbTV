import styled from "styled-components"
import ContentWraper from "../common/ContentWrapper";
import Thumbnail from "../../assets/thumbnail.png";

const StyledBlogs = styled.div`
  min-height: 100vh;
  min-width: 100%;
  width: auto;
  .blog {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0px 4px 250px 11px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    .overlay {
      opacity: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.32);
      button {
        border-radius: 5px;
        background: #8C30F5;
        color: #ffffff;
        font-weight: 800;
      }
    }
    &:hover {
      .overlay {
        opacity: 1;
      }
    }
    .thumbnail {
      height: 60%;
      width: 100%;
    }
    .title {
      font-weight: 800;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #000000;
    }
    .description {
      font-size: 12px;
      line-height: 14px;
      display: flex;
      color: #18191F;
      text-align: justify;
    }
    .date {
      font-weight: 800;
      font-size: 10px;
      line-height: 18px;
      letter-spacing: 2px;
      color: #000000;
    }
    .play-btn {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background: rgba(255, 255, 255, 0.69);
    }
  }
  @media screen and (max-width: 972px) {
    padding: 40px;
  }
`;

const blogs = [
  {
    thumbnail: '',
    title: 'Blog Title',
    summary: 'Lorem ipsum dolor sit amet, dj sdhsd hd consectetur.',
    date: '12/12/2021'
  },
  {
    thumbnail: '',
    title: 'Blog Title',
    summary: 'Lorem ipsum dolor sit amet, dj sdhsd hd consectetur.',
    date: '12/12/2021'
  },
  {
    thumbnail: '',
    title: 'Blog Title',
    summary: 'Lorem ipsum dolor sit amet, dj sdhsd hd consectetur.',
    date: '12/12/2021'
  },
  {
    thumbnail: '',
    title: 'Blog Title',
    summary: 'Lorem ipsum dolor sit amet, dj sdhsd hd consectetur.',
    date: '12/12/2021'
  },
  {
    thumbnail: '',
    title: 'Blog Title',
    summary: 'Lorem ipsum dolor sit amet, dj sdhsd hd consectetur.',
    date: '12/12/2021'
  },
  {
    thumbnail: '',
    title: 'Blog Title',
    summary: 'Lorem ipsum dolor sit amet, dj sdhsd hd consectetur.',
    date: '12/12/2021'
  },
  {
    thumbnail: '',
    title: 'Blog Title',
    summary: 'Lorem ipsum dolor sit amet, dj sdhsd hd consectetur.',
    date: '12/12/2021'
  },
  {
    thumbnail: '',
    title: 'Blog Title',
    summary: 'Lorem ipsum dolor sit amet, dj sdhsd hd consectetur.',
    date: '12/12/2021'
  },
]

const Blogs = () => {
  const renderBlog = (blog) => {
    return (
      <a href={blog.url} className="blog relative m-4">
        <img src={blog.thumbnail || Thumbnail} alt="Thumbnail" className="thumbnail" />
        <div className="px-4 py-2">
          <p className="title">{blog.title}</p>
          <p className="description">{blog.summary}</p>
          <p className="date">{blog.date}</p>
        </div>
        <div className="absolute m-auto overlay top-0 left-0 flex flex-row justify-center items-center">
          <button className="py-2 px-8">Read Now</button>
        </div>
      </a>
    )
  }
  return (
    <StyledBlogs className="px-32 py-10">
      <ContentWraper title="Blog" data={blogs} renderComponent={renderBlog}/>
    </StyledBlogs>
  )
}

export default Blogs;
