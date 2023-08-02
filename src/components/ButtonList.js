import React from "react";
import Button from "./Button";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "Editing",
    "Shopping",
    "Live",
    "Smartphones",
    "News",
    "Sales",
    "Tourism",
    "Dhee",
    "Cricket",
    "Shopping",
    "Live",
    "Smartphones",
    "News",
    "Sales",
    "Tourism",
    "Dhee",
    "Cricket",
    "Shopping",
    "Live",
    "Smartphones",
    "News",
    "Sales",
    "Tourism",
    "Dhee",
    "Cricket",
  ];

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  return (
    <div className="grid grid-flow-col">
      <MdChevronLeft
        className="hover:scale-150 my-2 text-gray-400"
        size={30}
        onClick={slideLeft}
      />
      <div className="flex overflow-hidden scroll-smooth" id="slider">
        {buttonList?.map((btn, index) => (
          <Link to={"/results?search_query=" + btn} key={index}>
            <Button name={btn} />
          </Link>
        ))}
      </div>
      <MdChevronRight
        size={30}
        onClick={slideRight}
        className="my-2 hover:scale-150 text-gray-400"
      />
    </div>
  );
};

export default ButtonList;
