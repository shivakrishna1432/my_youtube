import React, { useState, useEffect } from "react";
import { COMMENTS_API } from "../utils/constant";
import Comment from "./Comment";
import CommentReply from "./CommentReply";

const CommentThread = ({ videoId }) => {
  const [commentThread, setCommentThread] = useState([]);
  const [isVisible, setIsVisible] = useState(null);

  useEffect(() => {
    getComments();
    // eslint-disable-next-line
  }, [videoId]);

  const getComments = async () => {
    const data = await fetch(COMMENTS_API + `&videoId=${videoId}`);
    const json = await data.json();
    setCommentThread(json?.items);
  };
  return (
    <div>
      <h1 className="font-bold mt-5 mb-5">30 Comments</h1>

      {commentThread?.map((comment) => {
        return (
          <div className="mt-6" key={comment.id}>
            <Comment
              author={
                comment?.snippet?.topLevelComment?.snippet?.authorDisplayName
              }
              image={
                comment?.snippet?.topLevelComment?.snippet
                  ?.authorProfileImageUrl
              }
              text={comment?.snippet?.topLevelComment?.snippet?.textOriginal}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              id={comment?.id}
              replies={comment?.replies?.comments?.length}
            />
            {isVisible &&
              comment?.replies?.comments?.map((reply) => {
                return <CommentReply key={reply?.id} reply={reply} />;
              })}
          </div>
        );
      })}
    </div>
  );
};

export default CommentThread;
