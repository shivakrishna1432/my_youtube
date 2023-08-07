import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineLike, AiOutlineSetting } from "react-icons/ai";
import {
  VscDeviceCameraVideo,
  VscHistory,
  VscPlayCircle,
} from "react-icons/vsc";
import { BiHelpCircle } from "react-icons/bi";
// import { RiArrowDownSLine } from "react-icons/ri";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdOutlineFeedback,
} from "react-icons/md";

const SideBar = () => {
  const isMenu = useSelector((store) => store.nav.isMenu);
  if (!isMenu) {
    return null;
  }
  return (
    <div className="col-span-1 shadow-lg w-60 mt-1">
      <ul>
        <Link to="/">
          <div className="flex mx-2 gap-3 items-center bg-gray-300 rounded-lg h-10">
            <AiFillHome className="text-xl ml-3" />
            <li className="text-md">Home</li>
          </div>
        </Link>
        <Link to={"/results?search_query=Shorts"}>
          <div className="flex mx-2 gap-3 cursor-pointer hover:bg-gray-200 mt-2 items-center rounded-lg h-10">
            <VscDeviceCameraVideo className="text-xl ml-3" />
            <li className="text-md">Shorts</li>
          </div>
        </Link>
        <Link to={"/results?search_query=Subscriptions"}>
          <div className="flex mx-2 gap-3 mt-2 cursor-pointer hover:bg-gray-200 items-center rounded-lg h-10">
            <MdOutlineSubscriptions className="text-xl ml-3" />
            <li className="text-md">Subscriptions</li>
          </div>
        </Link>
        <hr className="border-gray-400 mx-3 mt-3" />
        <div className="flex mx-2 gap-3 mt-4 items-center cursor-pointer hover:bg-gray-200 rounded-lg h-10">
          <MdOutlineVideoLibrary className="text-xl ml-3" />
          <li className="text-md">Library</li>
        </div>
        <Link to={"/results?search_query=Subscriptions"}>
          <div className="flex mx-2 gap-3 mt-2 items-center cursor-pointer hover:bg-gray-200 rounded-lg h-10">
            <VscHistory className="text-xl ml-3" />
            <li className="text-md">History</li>
          </div>
        </Link>
        <div className="flex mx-2 gap-3 mt-2 items-center cursor-pointer hover:bg-gray-200 rounded-lg h-10">
          <VscPlayCircle className="text-xl ml-3" />
          <li className="text-md">Your Videos</li>
        </div>
        <div className="flex mx-2 gap-3 mt-2 items-center cursor-pointer hover:bg-gray-200 rounded-lg h-10">
          <MdOutlineWatchLater className="text-xl ml-3" />
          <li className="text-md">Watch Later</li>
        </div>
        <div className="flex mx-2 gap-3 mt-2 items-center cursor-pointer hover:bg-gray-200 rounded-lg h-10">
          <AiOutlineLike className="text-xl ml-3" />
          <li className="text-md">Liked Videos</li>
        </div>
        {/* <div className="flex mx-2 gap-3 mt-2 items-center cursor-pointer hover:bg-gray-200 rounded-lg h-10">
          <RiArrowDownSLine className="text-xl ml-3" />
          <li className="text-md">Show More</li>
        </div> */}
        <hr className="border-gray-400 mx-3 mt-3" />

        <div className="flex mx-2 gap-3 mt-2 items-center cursor-pointer hover:bg-gray-200 rounded-lg h-10">
          <AiOutlineSetting className="text-xl ml-3" />
          <li className="text-md">Settings</li>
        </div>
        <div className="flex mx-2 gap-3 mt-2 items-center cursor-pointer hover:bg-gray-200 rounded-lg h-10">
          <BiHelpCircle className="text-xl ml-3" />
          <li className="text-md">Help</li>
        </div>
        <div className="flex mx-2 gap-3 mt-2 items-center cursor-pointer hover:bg-gray-200 rounded-lg h-10">
          <MdOutlineFeedback className="text-xl ml-3" />
          <li className="text-md">Feedback</li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
