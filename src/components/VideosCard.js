import React from "react";
import { number } from "../utils/number";

const VideosCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  const views = statistics?.viewCount;
  return (
    <ul className="m-2 p-2 w-[230px] hover:scale-110 hover:duration-200 hover:shadow-lg rounded-xl">
      <img className="rounded-lg" src={thumbnails?.medium?.url} alt={title} />
      <li className="font-bold text-[13px]">{title}</li>
      <li className="text-gray-600 text-sm">{channelTitle}</li>
      <li className="text-gray-600 text-sm">{number(views)} Views</li>
    </ul>
  );
};

export default VideosCard;
