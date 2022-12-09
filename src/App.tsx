import { ComponentType } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './App.scss';
import HeaderComponent from './containers/HeaderComponent';
import MovieComponent from './containers/MovieComponent';
import { OnLoad } from './hoc';
import { CommonActionsType } from './model';
import { actions } from './reducers/movieReducer';
import { movieListLoadedSelector } from './selectors';

interface Props {
  loaded: boolean;
  load: CommonActionsType['actionsWithoutPayloadload'];
}

const App: React.FC<Props> = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <MovieComponent />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  loaded: movieListLoadedSelector(state),
});

const mapDispatchToProps = {
  load: actions.getMovieList,
};

export default compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  OnLoad
)(App);
