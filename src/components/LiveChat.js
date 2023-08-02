import React, { useEffect } from "react";
import { useState } from "react";
import {
  generate,
  generateMessage,
  generateProfileImage,
} from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [chatText, setChatText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          text: generateMessage(),
          profile: generateProfileImage(),
        })
      );
    }, 4000);
    return () => clearInterval(timer);
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="w-full ">
        <h1 className="font-semibold p-2">Live Chat</h1>
        <div className="flex flex-col-reverse overflow-y-auto h-[450px]">
          {message.map((chat, i) => (
            <ChatMessage
              name={chat.name}
              text={chat.text}
              profile={chat.profile}
              key={i}
            />
          ))}
        </div>
      </div>
      <form
        className="mt-3 mx-4"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Aryan",
              text: chatText,
              profile: generateProfileImage(),
            })
          );
          setChatText("");
        }}
      >
        <input
          value={chatText}
          onChange={(e) => setChatText(e.target.value)}
          className="border border-black w-[75%] px-3 py-1 rounded-lg"
          placeholder="Type here...."
          type="text"
        />
        <button className="bg-green-600 mx-2 px-3 py-1 rounded-lg text-white font-semibold">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
