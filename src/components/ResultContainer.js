import React from "react";
import { GoSearch } from "react-icons/go";

const ResultContainer = ({ name }) => {
  return (
    <div>
      <a href={`/results?search_query=${name}`}>
        <li className="px-3 font-semibold py-2 hover:bg-gray-200 rounded-sm flex items-center">
          <GoSearch className="mr-3" /> {name}
        </li>
      </a>
    </div>
  );
};

export default ResultContainer;
