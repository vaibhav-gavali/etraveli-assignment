import React from 'react';
import MovieDetailsComponent from '../components/movie/MovieDetailsComponent';
import MoviesListComponent from '../components/movie/MoviesListComponent';
import { Row, Col } from '../components/common';

const MovieListComponent: React.FC = () => {
  return (
    <Row justifyContent="space-between" styles={{ height: '100%' }}>
      <Col flexBasis={'50%'} maxWidth={'50%'}>
        <MoviesListComponent />
      </Col>
      <Col flexBasis={'50%'} maxWidth={'50%'}>
        <MovieDetailsComponent />
      </Col>
    </Row>
  );
};

export default MovieListComponent;
