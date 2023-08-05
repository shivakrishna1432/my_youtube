import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideosCard from "./VideosCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
    //eslint-disable-next-line
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };
  // if (videos?.length === 0) {
  //   return null;
  // }
  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideosCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
