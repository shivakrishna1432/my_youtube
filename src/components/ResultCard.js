import React from "react";

const ResultCard = ({ searchCard }) => {
  const { channelTitle, description, thumbnails, title } = searchCard?.snippet;
  //   console.log(searchCard?.id?.videoId);
  return (
    <div>
      <div className="flex mx-8 shadow-lg hover:scale-105 cursor-pointer p-3 hover:duration-75 rounded-lg">
        <img
          className="h-[150px] w-[280px] rounded-lg"
          src={thumbnails?.medium?.url}
          alt={title}
        />
        <div className="flex flex-col mx-4">
          <h1 className="font-semibold text-xl mb-2">{title}</h1>
          <p className="mb-2 font-semibold">{channelTitle}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
