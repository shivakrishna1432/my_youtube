import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";

const CommentReply = ({ reply }) => {
  const { authorDisplayName, authorProfileImageUrl, textOriginal } =
    reply?.snippet;
  return (
    <div className="ml-14 mb-3">
      <div className="flex items-center">
        <img
          className="rounded-full w-7 h-7"
          src={authorProfileImageUrl}
          alt={authorDisplayName}
        />
        <div className="flex flex-col px-4">
          <div>
            <span className="font-bold">{authorDisplayName}</span>
            <span className="text-gray-400 ml-2">2 days ago</span>
          </div>
          <p className="text-md">{textOriginal}</p>
        </div>
      </div>
      <div className="flex ml-11 mt-2 items-center">
        <BiLike size={20} />
        <span>156</span>
        <BiDislike className="ml-2" size={20} />
        <span className="ml-4">Reply</span>
      </div>
    </div>
  );
};

export default CommentReply;
