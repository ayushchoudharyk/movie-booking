import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/movieData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

// import Details from '../../screens/details/Details';
// import ReactDOM from 'react-dom';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  upcomingMoviesHeading: {
    textAlign: 'center',
    background: '#ff9999',
    padding: '8px',
    fontSize: '1rem',
  },
  gridListUpcomingMovies: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    width: '100%',
  },
  gridListMain: {
    transform: 'translateZ(0)',
    cursor: 'pointer',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 240,
  },
  title: {
    color: theme.palette.primary.light,
  },
});

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movieName: '',
      genres: [],
      artists: [],
    };
  }

  movieNameChangeHandler = (event) => {
    this.setState({ movieName: event.target.value });
    console.log(this.state.movieName);
  };

  genreSelectHandler = (event) => {
    this.setState({ genres: event.target.value });
    console.log(this.state.genres);
  };

  artistSelectHandler = (event) => {
    this.setState({ artists: event.target.value });
  };


  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className={classes.upcomingMoviesHeading}>
          <b>Upcoming Movies</b>
        </div>
        <GridList cols={5} className={classes.gridListUpcomingMovies}>
          {moviesData.map((movie) => (
            <GridListTile key={movie.id}>
              <img
                src={movie.poster_url}
                alt={movie.title}
                className="movie-poster"
              ></img>
              <GridListTileBar title={movie.title}></GridListTileBar>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
