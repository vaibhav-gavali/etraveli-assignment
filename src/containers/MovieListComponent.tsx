import React from 'react';
import MovieDetailsComponent from '../components/MovieDetailsComponent';
import MoviesListComponent from '../components/MoviesListComponent';
import { Row, Col } from '../components/common';

const MovieListComponent: React.FC = () => {
  return (
    <Row justifyContent="space-between">
      <Col flexBasis={'49%'} maxWidth={'49%'}>
        <MoviesListComponent />
      </Col>
      <Col flexBasis={'49%'} maxWidth={'49%'}>
        <MovieDetailsComponent />
      </Col>
    </Row>
  );
};

export default MovieListComponent;
