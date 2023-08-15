import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { VIDEO_SUGGESTION_API } from "../utils/constant";
import VideoSuggestionCard from "./VideoSuggestionCard";

const WatchPageVideos = () => {
  const [params] = useSearchParams();
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const videoId = params.get("v");
  useEffect(() => {
    getSuggestedVideos();
    //eslint-disable-next-line
  }, [videoId]);

  const getSuggestedVideos = async () => {
    const data = await fetch(VIDEO_SUGGESTION_API);
    const json = await data.json();
    setSuggestedVideos(json?.items);
  };
  if (suggestedVideos?.length === 0) {
    return null;
  }
  return (
    <div>
      <h1 className="font-bold mx-2">Related Videos</h1>
      <ul>
        {suggestedVideos?.map((videos) => (
          <Link
            to={"/watch?v=" + videos?.id?.videoId}
            key={videos?.id?.videoId}
          >
            <li>
              <VideoSuggestionCard videoInfo={videos} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default WatchPageVideos;
