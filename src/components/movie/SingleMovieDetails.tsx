import React, { useEffect } from 'react';
import { Col, Row } from '../common';
import {
  charactersLoadingSelector,
  charactersListSelector,
} from '../../selectors';
import { actions } from '../../reducers/movieReducer';
import { connect } from 'react-redux';
import { CommonActionsType } from '../../model';
import Loader from '../common/Loader';

type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
};

interface Props {
  charactersList: Character[];
  charactersLoading: boolean;
  getMovieCharacters: CommonActionsType['actionsWithoutPayloadload'];
}

const SingleMovieDetails: React.FC<Props> = (props) => {
  const { charactersList, charactersLoading, getMovieCharacters } = props;

  useEffect(() => {
    getMovieCharacters();
  }, []);

  if (charactersLoading) {
    return (
      <Row
        justifyContent="center"
        alignItems="center"
        styles={{ margin: '20px 0px' }}
        data-testid={'characters-loading'}
        fullWidth
      >
        <Loader />
      </Row>
    );
  }

  const stylesForEmptyCondition = {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const noCharacters = charactersList.length === 0;

  if (noCharacters) {
    return (
      <Row
        styles={stylesForEmptyCondition}
        data-testid={'characters-loaded-empty'}
      >
        <h3>No Character(s) Found</h3>
      </Row>
    );
  }

  return (
    <Row
      styles={{
        flexWrap: 'wrap',
        maxHeight: '500px',
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
      justifyContent="space-around"
      data-testid={'characters-loaded'}
    >
      {charactersList.map((character, index) => {
        return (
          <Col
            flexBasis="32%"
            maxWidth="32%"
            styles={{
              background: 'lightgray',
              marginBottom: 10,
              borderRadius: 3,
              padding: 10,
            }}
            key={`${character.name}-${index}`}
          >
            <Row flexDirection="column">
              <div>
                <span>Name: </span> <span>{character.name}</span>
              </div>
              <div>
                <span>Height: </span> <span>{character.height}</span>
              </div>
              <div>
                <span>Mass: </span> <span>{character.mass}</span>
              </div>
              <div>
                <span>Hair Color: </span> <span>{character.hair_color}</span>
              </div>
              <div>
                <span>Skin Color: </span> <span>{character.skin_color}</span>
              </div>
            </Row>
          </Col>
        );
      })}
    </Row>
  );
};

const mapStateToProps = (state: any) => ({
  charactersList: charactersListSelector(state),
  charactersLoading: charactersLoadingSelector(state),
});

const mapDispatchToProps = {
  getMovieCharacters: actions.getMovieCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovieDetails);
