import React from 'react';
import { Row } from './common';
import { MdSearch } from 'react-icons/md';
import { getSearchValueSelector } from '../selectors';
import { actions } from '../reducers/headerReducer';
import { connect } from 'react-redux';
import { CommonActionsType } from '../model';
import './SearchComponent.scss';

interface Props {
  searchValue: string;
  setSearchBy: CommonActionsType['actionsWithPayload'];
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
  searchValue: getSearchValueSelector(state),
});

const mapDispatchToProps = {
  setSearchBy: actions.setSearchBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
