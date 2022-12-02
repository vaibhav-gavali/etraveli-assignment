import React from 'react';
import { CommonActionsType } from '../../model';
import { Col, Row } from '../common';
import './MovieItem.scss';

type Movie = {
  title: string;
  episode_id: number;
  release_date: string;
};

interface Props {
  movie: Movie;
  selectSingleMovie: CommonActionsType['actionsWithPayload'];
}

const MovieItem: React.FC<Props> = (props) => {
  const { movie, selectSingleMovie } = props;
  const { title, episode_id, release_date } = movie;

  return (
    <Row
      fullWidth
      rowClassName={`item-wrapper`}
      onClick={() => selectSingleMovie(episode_id)}
      alignItems="center"
      justifyContent="center"
    >
      <Col colClassName="episode">{`EPISODE ${episode_id}`}</Col>
      <Col flexGrow={1} colClassName="title">
        {title}
      </Col>
      <Col colClassName="date">{release_date}</Col>
    </Row>
  );
};

export default MovieItem;
