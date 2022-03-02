import React from "react";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";

function FilterCard(props) {
  const [open, setOpen] = useState(false);
  const { genres, selectedGenres, setSelectedGenres } = props;

  const toggleOpen = () => {
    setOpen((state) => !state);
  };

  const toggleSelected = (id) => {
    setSelectedGenres((state) => {
      return state.includes(id)
        ? state.filter((s) => s !== id)
        : [...state, id];
    });
  };

  const isSelected = (id) => {
    return selectedGenres.includes(id);
  };

  return (
    <div className="main__aside__card">
      <div className="main__aside__card__box">
        <div className="main__aside__card__box__text">Filters</div>

        <ChevronRightIcon
          onClick={toggleOpen}
          className="main__aside__card__box__icon"
        />
      </div>

      <div className={`${!open && "hide"} main__aside__card__genres`}>
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => toggleSelected(genre.id)}
            type="button"
            className={`main__aside__card__genres__btn ${
              isSelected(genre.id) && "main__aside__card__genres__btn__selected"
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterCard;
