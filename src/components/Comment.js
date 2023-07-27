import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Comment = ({
  author,
  image,
  text,
  isVisible,
  setIsVisible,
  id,
  replies,
}) => {
  return (
    <div>
      <div className="flex items-center">
        <img className="rounded-full w-10 h-10" src={image} alt={author} />
        <div className="flex flex-col px-4">
          <div>
            <span className="font-semibold">{author}</span>
            <span className="text-gray-400 ml-2">2 days ago</span>
          </div>
          <p className="text-md">{text}</p>
        </div>
      </div>
      <div className="flex ml-14 mt-2 items-center">
        <BiLike size={20} />
        <span className="ml-2">156</span>
        <BiDislike className="ml-2" size={20} />
        <span className="ml-6">Reply</span>
      </div>
      {replies && (
        <div
          className="flex mt-3 ml-14 items-center cursor-pointer"
          onClick={
            id !== isVisible ? () => setIsVisible(id) : () => setIsVisible(null)
          }
        >
          {id === isVisible ? (
            <IoIosArrowUp className="text-blue-700 mt-1 mr-2 font-bold" />
          ) : (
            <IoIosArrowDown className="text-blue-700 mt-1 mr-2 font-bold" />
          )}
          <span className="text-blue-700 font-bold">{replies} Reply</span>
        </div>
      )}
    </div>
  );
};

export default Comment;
