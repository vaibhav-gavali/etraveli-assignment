import React from 'react';
import { Row, Modal } from '../common';
import { currentMovieDetailsSelector } from '../../selectors';
import { connect } from 'react-redux';
import './MovieDetailsComponent.scss';

type Movie = {
  title: string;
  opening_crawl: string;
  director: string;
};

interface Props {
  currentMovie: Movie;
}

const stylesForEmptyCondition = {
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
};

const MovieDetailsComponent: React.FC<Props> = (props) => {
  const { currentMovie } = props;
  const { title, opening_crawl, director } = currentMovie;

  const movieSelected = Object.keys(currentMovie).length > 0;

  return (
    <Row
      flexDirection="column"
      rowClassName="details-wrapper"
      styles={!movieSelected ? stylesForEmptyCondition : {}}
    >
      {movieSelected ? (
        <Row data-testid="movie-details">
          <Row flexDirection="column">
            <h2>{title}</h2>
            <p className="details">{opening_crawl}</p>
            <div className="director">Directed by: {director}</div>
          </Row>
          <Row>
            <Modal shouldShow={false}>
              <h1>Hello</h1>
            </Modal>
          </Row>
        </Row>
      ) : (
        <h3>No Movie Selected</h3>
      )}
    </Row>
  );
};

const mapStateToProps = (state: any) => ({
  currentMovie: currentMovieDetailsSelector(state),
});

export default connect(mapStateToProps, null)(MovieDetailsComponent);
