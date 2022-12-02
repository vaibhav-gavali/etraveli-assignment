import React from 'react';
import MovieDetailsComponent from '../components/movie/MovieDetailsComponent';
import MoviesListComponent from '../components/movie/MoviesListComponent';
import { Row, Col } from '../components/common';
import { movieListLoadingSelector } from '../selectors';
import { connect } from 'react-redux';
import Loader from '../components/common/Loader';

interface Props {
  listLoading: boolean;
}

const MovieComponent: React.FC<Props> = (props) => {
  const { listLoading } = props;

  if (listLoading) {
    return (
      <Row
        justifyContent="center"
        alignItems="center"
        styles={{ margin: '20px 0px' }}
      >
        <Loader />
      </Row>
    );
  }

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

const mapStateToProps = (state: any) => ({
  listLoading: movieListLoadingSelector(state),
});

export default connect(mapStateToProps, null)(MovieComponent);
