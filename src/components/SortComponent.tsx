import React, { useState } from 'react';
import { Row } from './common';
import { MdClose, MdCheck } from 'react-icons/md';
import { connect } from 'react-redux';
import { getSortValueSelector } from '../selectors';
import { actions } from '../reducers/headerReducer';
import { CommonActionsType } from '../model';

import './SortComponent.scss';

const SORT_OPTIONS = [
  {
    label: 'Episode',
    value: 'episode_id',
  },
  {
    label: 'Year',
    value: 'release_date',
  },
];

interface Props {
  sortValue: string;
  setSortBy: CommonActionsType['actions'];
}

const SortComponent: React.FC<Props> = (props) => {
  const { sortValue, setSortBy } = props;

  const [showDropdown, setShowDropdown] = useState(false);
  console.log('showDropdown', showDropdown);

  return (
    <div className="dropdown">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="dropbtn"
      >
        Sort by...
      </button>
      <Row
        flexDirection="column"
        rowClassName={`dropdown-content ${showDropdown ? 'show' : ''}`}
      >
        <Row fullWidth rowClassName={`content-header`}>
          <div style={{ flexGrow: 1 }}>Sort by</div>
          <MdClose className="icon" onClick={() => setShowDropdown(false)} />
        </Row>
        <Row flexDirection="column" fullWidth>
          {SORT_OPTIONS.map((option) => (
            <div
              className="optionItem"
              key={option.value}
              onClick={() => {
                setSortBy(option.value);
                setShowDropdown(false);
              }}
            >
              {sortValue === option.value && <MdCheck className="checked" />}
              {option.label}
            </div>
          ))}
        </Row>
      </Row>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  sortValue: getSortValueSelector(state),
});

const mapDispatchToProps = {
  setSortBy: actions.setSortBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortComponent);
