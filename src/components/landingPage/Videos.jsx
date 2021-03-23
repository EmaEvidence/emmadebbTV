import styled from "styled-components";
import axios from 'axios';
import { useEffect, useState } from "react";
import ContentWraper from "../common/ContentWrapper";
import Thumbnail from "../../assets/thumbnail.png";
import Play from "../../assets/play.png";

const StyledVideos = styled.div`
  min-height: 100vh;
  min-width: 100%;
  width: auto;
  .video {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      box-shadow: 0px 0px 500px grey;
    }
    .play-btn {
      width: 70px;
      height: 70px;
      border-radius: 50px;
      background: rgba(255, 255, 255, 0.69);
      z-index: 5;
    }
  }
  @media screen and (max-width: 972px) {
    padding: 40px;
  }
`;

const Videos = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios.get('https://emmadebb.herokuapp.com/videos')
    .then((response) => {
      setVideos(response.data)
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
    });
  }, []);
  const renderVideo = (video) => {
    return (
      <a href={video.url} target="blank" className="video relative m-4 flex flex-row justify-center items-center">
        <img src={video.thumbnail || Thumbnail} alt="Thumbnail" className="absolute top-0 left-0" />
        <div className="play-btn flex flex-row justify-center items-center">
          <img src={Play} alt="Play Icon" />
        </div>
      </a>
    )
  }
  return (
    <StyledVideos id="videos" className="px-32 py-10">
      {
        loading ?
          <p>Loading Videos</p> : !loading && videos.length === 0 ? <p>No Video yet</p> : <ContentWraper title="Videos" data={videos} renderComponent={renderVideo} />
      }
    </StyledVideos>
  )
}

export default Videos;
