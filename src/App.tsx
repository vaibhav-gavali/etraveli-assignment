import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import HeaderComponent from './containers/HeaderComponent';
import MovieListComponent from './containers/MovieListComponent';
import { CommonActionsType } from './model';
import { actions } from './reducers/movieReducer';

interface Props {
  getMovieList: CommonActionsType['actionsWithoutPayloadload'];
}

const App: React.FC<Props> = (props) => {
  const { getMovieList } = props;
  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className="App">
      <HeaderComponent />
      <MovieListComponent />
    </div>
  );
};

const mapDispatchToProps = {
  getMovieList: actions.getMovieList,
};

export default connect(null, mapDispatchToProps)(App);
