import { useAppSelector, useAppDispatch } from '../../hooks';
import React, { useState } from 'react';
import { sortingType, SortingType } from '../../types/sort';
import { getSort } from '../../store/offers-process/selectors';
import { sortCards } from '../../store/offers-process/offers-process';

function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const [openedOptions, setOptionsState] = useState<boolean>(false);
  const selectedOption = useAppSelector(getSort);

  const handleSortingClick = () => {
    setOptionsState(!openedOptions);
  };

  const handleSortingOption = (param: SortingType) => {
    dispatch(sortCards(param));
    setOptionsState(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortingClick}
      >
        { selectedOption }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${openedOptions ? 'places__options--opened' : ''}`}
      >
        {
          Object.values(sortingType).map((option) => (
            <li
              className={`places__option ${option === selectedOption ? 'places__option--active' : ''}`}
              tabIndex={0}
              key={ option }
              onClick={() => handleSortingOption(option)}
            >
              { option }
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default Sorting;
