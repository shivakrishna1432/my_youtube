import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideosCard from "./VideosCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    getVideos();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll, true);
    return () => {
      window.removeEventListener("scroll", infiniteScroll, true);
    };
    //eslint-disable-next-line
  }, [nextPageToken]);

  const getVideos = async () => {
    try {
      const url =
        nextPageToken !== ""
          ? `${YOUTUBE_API}&pageToken=${nextPageToken}`
          : YOUTUBE_API;
      const data = await fetch(url);
      const json = await data.json();
      setNextPageToken(json?.nextPageToken);
      setVideos([...videos, ...json.items]);
    } catch (e) {
      console.log(e);
    }
  };

  const infiniteScroll = () => {
    if (
      window.innerHeight + Math.round(document.documentElement.scrollTop) >=
      document.documentElement.offsetHeight - 300
    ) {
      getVideos();
    }
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
