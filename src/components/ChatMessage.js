import React from "react";

const ChatMessage = ({ name, text, profile }) => {
  return (
    <div className="flex items-center m-3">
      <img src={profile} className="h-6 w-6 mr-2 rounded-full" alt={name} />
      <span className="font-bold mr-2">{name}</span>
      <span>{text}</span>
    </div>
  );
};

export default ChatMessage;
