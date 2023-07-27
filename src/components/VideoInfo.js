import React, { useState, useEffect } from "react";
import { VIDEO_INFO_API } from "../utils/constant";
import { useSearchParams } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { number } from "../utils/number";
import { LiaDownloadSolid } from "react-icons/lia";

const VideoInfo = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [params] = useSearchParams();
  const videoId = params.get("v");
  const likeCount = videoInfo?.statistics?.likeCount;
  const description = videoInfo?.snippet?.localized?.description || "";
  const views = videoInfo?.statistics?.viewCount;

  useEffect(() => {
    getVideoInfo();
    //eslint-disable-next-line
  }, []);

  const getVideoInfo = async () => {
    const data = await fetch(VIDEO_INFO_API + videoId);
    const json = await data.json();
    setVideoInfo(json?.items[0]);
  };
  return (
    <div>
      <h1 className="text-xl font-bold mb-3">{videoInfo?.snippet?.title}</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FaCircleUser className="h-9 w-9" />
          <div className="flex flex-col ml-4">
            <h1 className="font-bold">{videoInfo?.snippet?.channelTitle}</h1>
            <p className="text-sm text-gray-800">2.6M Subscribers</p>
          </div>
          <button className="bg-black px-4 py-2 font-bold text-white rounded-full ml-6">
            Subscribe
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex mr-2">
            <div className="flex cursor-pointer bg-gray-100 hover:bg-gray-300 items-center  px-4 py-2 rounded-l-full">
              <button className="flex">
                <AiOutlineLike className="text-2xl mr-2" />
                <span className="mr-2">{number(likeCount)}</span>
              </button>
            </div>
            <div className="flex items-center bg-gray-100 cursor-pointer hover:bg-gray-300 px-4 py-2 rounded-r-full">
              <button>
                <AiOutlineDislike className="text-2xl" />
              </button>
            </div>
          </div>

          <button className="bg-gray-100 mr-2 px-4 py-2 hover:bg-gray-300 rounded-full">
            Share
          </button>
          <button className="bg-gray-100 flex items-center px-4 py-2 hover:bg-gray-300 rounded-full mr-2">
            <LiaDownloadSolid className="mr-1" /> Download
          </button>
          <button className="bg-gray-100 px-4 py-2 hover:bg-gray-300 rounded-full">
            More...
          </button>
        </div>
      </div>

      <div className="mt-3 flex p-3 flex-col bg-gray-100 rounded-lg pb-3 hover:bg-gray-200 cursor-pointer">
        <div className="flex">
          <h1 className="font-semibold text-sm">{number(views)} views</h1>
          <h1 className="ml-2 text-sm font-semibold">Jul 20, 2023</h1>
          <h1 className="ml-2 text-sm text-blue-800 font-semibold">
            #1 on Trending
          </h1>
        </div>
        <div className="whitespace-pre-line mt-3">
          {showDescription ? description : description.slice(0, 200)}

          {showDescription ? (
            <span
              className="font-bold cursor-pointer active:bg-gray-400 m-3"
              onClick={() => setShowDescription(false)}
            >
              Show Less
            </span>
          ) : (
            <span
              className="font-bold cursor-pointer active:bg-gray-400 m-3"
              onClick={() => setShowDescription(true)}
            >
              Show More
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
