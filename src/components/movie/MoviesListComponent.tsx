import React from 'react';
import { Row } from '../common';
import { filteredMoviesSelector } from '../../selectors';
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

  const stylesForEmptyCondition = {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const noMovies = list.length === 0;

  return (
    <Row
      flexDirection="column"
      styles={noMovies ? stylesForEmptyCondition : {}}
    >
      {!noMovies ? (
        list.map((movie) => {
          return (
            <MovieItem
              key={movie.episode_id}
              movie={movie}
              selectSingleMovie={selectSingleMovie}
            />
          );
        })
      ) : (
        <h3>No Movie(s) Found</h3>
      )}
    </Row>
  );
};

const mapStateToProps = (state: any) => ({
  list: filteredMoviesSelector(state),
});

const mapDispatchToProps = {
  selectSingleMovie: actions.selectSingleMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesListComponent);
