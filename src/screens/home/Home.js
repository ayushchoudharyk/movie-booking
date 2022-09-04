import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/movieData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import {
  CardContent,
  Typography,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Button,
} from '@material-ui/core';
import genres from '../../common/genres';
import artists from '../../common/artists';
import TextField from '@material-ui/core/TextField';

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
        <div className="flex-container">
          <div className="left">
            <GridList
              cellHeight={350}
              cols={4}
              className={classes.gridListMain}
            >
              {moviesData.map((movie) => (
                <GridListTile
                  className="released-movie-grid-item"
                  key={'grid' + movie.id}
                  onClick={this.clickMovieGridItemHandler.bind(this, movie.id)}
                >
                  <img
                    src={movie.poster_url}
                    className="movie-poster"
                    alt={movie.title}
                  />
                  <GridListTileBar
                    title={movie.title}
                    subtitle={
                      <span>
                        Release Date:{' '}
                        {new Date(movie.release_date).toDateString()}
                      </span>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
          <div className="right">
            <Card>
              <CardContent>
                <FormControl className={classes.formControl}>
                  <Typography className={classes.title} color="textSecondary">
                    FIND MOVIES BY:
                  </Typography>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="movieName"> Movie Name </InputLabel>
                  <Input
                    id="movieName"
                    onChange={this.movieNameChangeHandler}
                  ></Input>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="select-multiple-choice">
                    {' '}
                    Genres{' '}
                  </InputLabel>
                  <Select
                    multiple
                    input={<Input id="select-multiple-choice"></Input>}
                    renderValue={(selected) => selected.join(',')}
                    value={this.state.genres}
                    onChange={this.genreSelectHandler}
                  >
                    <MenuItem value="0">None</MenuItem>
                    {genres.map((genre) => (
                      <MenuItem key={genre.id} value={genre.name}>
                        <Checkbox
                          checked={this.state.genres.indexOf(genre.name) > -1}
                        ></Checkbox>
                        <ListItemText primary={genre.name}></ListItemText>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="select-multiple-choice">
                    {' '}
                    Artists{' '}
                  </InputLabel>
                  <Select
                    multiple
                    input={<Input id="select-multiple-choice"></Input>}
                    renderValue={(selected) => selected.join(',')}
                    value={this.state.artists}
                    onChange={this.artistSelectHandler}
                  >
                    <MenuItem value="0">None</MenuItem>
                    {artists.map((artist) => (
                      <MenuItem
                        key={artist.id}
                        value={artist.first_name + ' ' + artist.last_name}
                      >
                        <Checkbox
                          checked={
                            this.state.artists.indexOf(
                              artist.first_name + ' ' + artist.last_name
                            ) > -1
                          }
                        ></Checkbox>
                        <ListItemText
                          primary={artist.first_name + ' ' + artist.last_name}
                        ></ListItemText>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    id="releaseStartDate"
                    label="Release Start Date"
                    type="date"
                    defaultValue=""
                    InputLabelProps={{ shrink: true }}
                  ></TextField>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    id="releaseEndDate"
                    label="Release End Date"
                    type="date"
                    defaultValue=""
                    InputLabelProps={{ shrink: true }}
                  ></TextField>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Button variant="contained" color="primary">
                    Apply
                  </Button>
                </FormControl>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
