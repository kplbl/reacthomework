import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";

function FilterCard() {
  return (
    <div className="main__aside__card">
      <div className="main__aside__card__box">
        <div className="main__aside__card__box__text">Filters</div>

        <ChevronRightIcon className="main__aside__card__box__icon" />
      </div>

      <div></div>
    </div>
  );
}

export default FilterCard;
