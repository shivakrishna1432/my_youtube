import React from "react";

const VideoSuggestionCard = ({ videoInfo }) => {
  const { snippet } = videoInfo;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="mt-3 cursor-pointer">
      <div className="flex">
        <img
          className="w-[180px] rounded-lg"
          src={thumbnails?.medium?.url}
          alt={videoInfo?.id}
        />
        <div className="flex flex-col ml-2">
          <h1 className="font-bold text-sm">{title}</h1>
          <p className="text-sm">{channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSuggestionCard;
