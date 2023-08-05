import React from "react";

const ResultContainer = ({ name }) => {
  return (
    <div>
      <a href={`/results?search_query=${name}`}>
        <li className="px-3 font-bold py-2 hover:bg-gray-200 rounded-sm">
          🔍 {name}
        </li>
      </a>
    </div>
  );
};

export default ResultContainer;
