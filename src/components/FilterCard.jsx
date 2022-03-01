import React from "react";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";

function FilterCard() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((state) => !state);
  };

  const genres = [
    "action",
    "adventure",
    "animation",
    "comedy",
    "crime",
    "documentary",
    "drama",
    "family",
    "fantasy",
    "history",
    "horror",
    "music",
    "mystery",
    "romance",
    "science fiction",
    "tv movie",
    "thriller",
    "war",
    "western",
  ];

  return (
    <div className="main__aside__card">
      <div className="main__aside__card__box">
        <div className="main__aside__card__box__text">Filters</div>

        <ChevronRightIcon
          onClick={toggleOpen}
          className="main__aside__card__box__icon"
        />
      </div>

      <div className={`${!open && "hide"}`}>Test</div>
    </div>
  );
}

export default FilterCard;
