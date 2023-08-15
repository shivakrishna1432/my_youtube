import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/navSlice";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { searchResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import ResultContainer from "./ResultContainer";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
// const rootEl = document.getElementById("root");
// rootEl.classList.add("bg-gray");
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearch();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    //eslint-disable-next-line
  }, [searchQuery]);

  const getSearch = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      searchResults({
        [searchQuery]: json[1],
      })
    );
  };

  // const handleSuggestions = () => {
  //   setShowSuggestions(false);
  // };

  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 items-center">
      <div className="col-span-1 flex">
        <img
          onClick={() => handleToggle()}
          className="h-8 cursor-pointer"
          alt="icon"
          src="https://cdn1.iconfinder.com/data/icons/ui-kit-2/128/Menu-512.png"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 pl-40">
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/results?search_query=${searchQuery}`);
          }}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 border pl-5 h-[40px] border-gray-400 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
          />
          <Link to={`/results?search_query=${searchQuery}`}>
            <button
              className="border border-gray-400 bg-gray-200 hover:bg-gray-300 px-3 h-[40px] rounded-r-full"
              type="search"
            >
              <GoSearch />
            </button>
          </Link>
        </form>
        <div className="absolute w-[31.5rem] rounded-lg shadow-lg bg-white">
          <ul>
            {showSuggestions &&
              suggestions?.map((s, index) => (
                <ResultContainer name={s} key={index} />
              ))}
          </ul>
        </div>
      </div>

      <div className="col-span-1 flex mt-1">
        <IoMdNotificationsOutline className="text-3xl" />

        <div>
          <FaCircleUser className="text-3xl ml-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
