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
      data-testid="movie-item"
    >
      <Col
        colClassName="episode"
        data-testid="movie-episodeId"
      >{`EPISODE ${episode_id}`}</Col>
      <Col flexGrow={1} colClassName="title">
        {title}
      </Col>
      <Col colClassName="date" data-testid="movie-releaseDate">
        {release_date}
      </Col>
    </Row>
  );
};

export default MovieItem;
