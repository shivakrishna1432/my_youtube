import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import CommentThread from "./CommentThread";
// import Comment from "./Comment";
// import CommentReply from "./CommentReply";
const Watchpage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getVideo();
    //eslint-disable-next-line
  }, []);

  const getVideo = () => {
    dispatch(closeMenu());
  };
  return (
    <div className="flex flex-col mx-10">
      <div className="w-[70%]">
        <iframe
          width="990.64"
          height="550"
          src={
            "https://www.youtube.com/embed/" + params.get("v") + "?autoplay=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex justify-between my-2">
        <div className="flex flex-col w-[70%]">
          <VideoInfo />
          <div>
            <CommentThread videoId={params.get("v")} />
          </div>
        </div>
        <div className="w-[30%]">Suggest</div>
      </div>
    </div>
  );
};
export default Watchpage;
