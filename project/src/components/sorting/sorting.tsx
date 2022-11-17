import { useAppSelector, useAppDispatch } from '../../hooks';
import React, { useState } from 'react';
import { SortingType } from '../../const';
import { sortCardsAction } from '../../store/action';

function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const [openedOptions, setOptionsState] = useState<boolean>(false);
  const selectedOption = useAppSelector((state) => state.sortingType);

  const handleSortingClick = () => {
    setOptionsState(!setOptionsState);
  };

  const handleSortingOption = (sortingType: SortingType) => {
    dispatch(sortCardsAction(sortingType));
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
        onClick={() => handleSortingOption}
      >
        {
          Object.values(SortingType).map((option) => (
            <li
              className={`places__option ${option === selectedOption ? 'places__option--active' : ''}`}
              tabIndex={0}
              key={ option }
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
