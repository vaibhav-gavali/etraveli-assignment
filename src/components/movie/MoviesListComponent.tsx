import React from 'react';
import { Row } from '../common';
import { movieListSelector } from '../../selectors';
import { actions } from '../../reducers/movieReducer';
import { connect } from 'react-redux';
import { CommonActionsType } from '../../model';
import MovieItem from './MovieItem';

type Movie = {
  title: string;
  episode_id: number;
  release_date: string;
};

interface Props {
  list: Movie[];
  selectSingleMovie: CommonActionsType['actionsWithPayload'];
}

const MoviesListComponent: React.FC<Props> = (props) => {
  const { list, selectSingleMovie } = props;

  return (
    <Row flexDirection="column">
      {list.map((movie) => {
        return (
          <MovieItem movie={movie} selectSingleMovie={selectSingleMovie} />
        );
      })}
    </Row>
  );
};

const mapStateToProps = (state: any) => ({
  list: movieListSelector(state),
});

const mapDispatchToProps = {
  selectSingleMovie: actions.selectSingleMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesListComponent);
