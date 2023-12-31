import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SEARCH_RESULTS_API } from "../utils/constant";
import ButtonList from "./ButtonList";
import ResultCard from "./ResultCard";
import shortid from "shortid";

const SearchResults = () => {
  const [params] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const query = params.get("search_query");

  useEffect(() => {
    getSearchContainer();
    //eslint-disable-next-line
  }, [query]);

  const getSearchContainer = async () => {
    const data = await fetch(SEARCH_RESULTS_API + `&q=${query}`);
    const json = await data.json();
    // console.log(json?.items[1]);
    setSearchResults(json?.items);
  };
  if (!searchResults) {
    return null;
  }
  return (
    <div>
      <ButtonList key={shortid.generate()} />
      <h1 className="font-semibold mx-4 mt-4 text-md">
        Here are the Search results for:{" "}
        <span className="font-bold text-lg">{query}</span>
      </h1>
      <ul>
        {searchResults.map((item) => (
          <Link to={"/watch?v=" + item?.id?.videoId} key={shortid.generate()}>
            <li>
              <ResultCard searchCard={item} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
