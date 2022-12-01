import React from 'react';
import { Row } from './common';
import { MdSearch } from 'react-icons/md';
import './SearchComponent.scss';
import { getSearchvalueSelector } from '../selectors';
import { actions } from '../reducers/headerReducer';
import { connect } from 'react-redux';
import { CommonActionsType } from '../model';

interface Props {
  searchValue: string;
  setSearchBy: CommonActionsType['actions'];
}

const SearchComponent: React.FC<Props> = (props) => {
  const { searchValue, setSearchBy } = props;
  return (
    <Row rowClassName="search-wrapper">
      <div className="input-wrapper">
        <MdSearch className="icon" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchBy(e.target.value)}
        />
      </div>
    </Row>
  );
};

const mapStateToProps = (state: any) => ({
  searchValue: getSearchvalueSelector(state),
});

const mapDispatchToProps = {
  setSearchBy: actions.setSearchBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
