import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Home from '../home/Home';
import { Typography, MenuItem, Button } from '@material-ui/core';
import '../bookshow/BookShow.css';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

class BookShow extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      language: '',
      showdate: '',
      showtime: '',
      locationRequired: 'dispNone',
      languageRequired: 'dispNone',
      showdateRequired: 'dispNone',
      showtimeRequired: 'dispNone',
      ticketRequired: 'dispNone',
      tickets: 0,
      unitprice: 500,
      availabletickets: 20,
    };
  }

  backtohomeHandler = () => {
    ReactDOM.render(<Home />, document.getElementById('root'));
  };

  locationChangeHandler = (event) => {
    this.setState({ location: event.target.value });
  };

  languageChangeHandler = (event) => {
    this.setState({ language: event.target.value });
  };

  showDateChangeHandler = (event) => {
    this.setState({ showdate: event.target.value });
  };

  showTimeChangeHandler = (event) => {
    this.setState({ showtime: event.target.value });
  };

  ticketChangeHandler = (event) => {
    this.setState({ tickets: event.target.value });
  };

  bookShowButtonHandler = () => {
    this.state.location === ''
      ? this.setState({ locationRequired: 'dispBlock' })
      : this.setState({ locationRequired: 'dispNone' });
    this.state.language === ''
      ? this.setState({ languageRequired: 'dispBlock' })
      : this.setState({ languageRequired: 'dispNone' });
    this.state.showdate === ''
      ? this.setState({ showdateRequired: 'dispBlock' })
      : this.setState({ showdateRequired: 'dispNone' });
    this.state.showtime === ''
      ? this.setState({ showtimeRequired: 'dispBlock' })
      : this.setState({ showtimeRequired: 'dispNone' });
    this.state.tickets === 0
      ? this.setState({ ticketRequired: 'dispBlock' })
      : this.setState({ ticketRequired: 'dispNone' });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="bookShow">
          <Typography className="back" onClick={this.backtohomeHandler}>
            &#60; Back To Home
          </Typography>
        </div>

        <Card className="cardStyle">
          <CardContent>
            <Typography variant="headline" component="h2">
              BOOK SHOW
            </Typography>
            <br />
            <FormControl required className="formControl">
              <InputLabel htmlFor="location"> Choose Location: </InputLabel>
              <Select
                value={this.state.location}
                onChange={this.locationChangeHandler}
              >
                {location.map((loc) => (
                  <MenuItem key={'loc' + loc.id} value={loc.location}>
                    {loc.location}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText className={this.state.locationRequired}>
                <span className="red">required</span>
              </FormHelperText>
            </FormControl>
            <br />
            <br />

            <FormControl required className="formControl">
              <InputLabel htmlFor="language"> Choose Language: </InputLabel>
              <Select
                value={this.state.language}
                onChange={this.languageChangeHandler}
              >
                {language.map((lang) => (
                  <MenuItem key={'lang' + lang.id} value={lang.language}>
                    {lang.language}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText className={this.state.languageRequired}>
                <span className="red">required</span>
              </FormHelperText>
            </FormControl>
            <br />
            <br />

            <FormControl required className="formControl">
              <InputLabel htmlFor="showdate"> Choose Show Date: </InputLabel>
              <Select
                value={this.state.showdate}
                onChange={this.showDateChangeHandler}
              >
                {showDate.map((shdt) => (
                  <MenuItem key={'sd' + shdt.id} value={shdt.showDate}>
                    {shdt.showDate}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText className={this.state.showdateRequired}>
                <span className="red">required</span>
              </FormHelperText>
            </FormControl>
            <br />
            <br />

            <FormControl required className="formControl">
              <InputLabel htmlFor="showtime"> Choose Show Time: </InputLabel>
              <Select
                value={this.state.showtime}
                onChange={this.showTimeChangeHandler}
              >
                {showTime.map((shtime) => (
                  <MenuItem key={'shtime' + shtime.id} value={shtime.showTime}>
                    {shtime.showTime}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText className={this.state.showtimeRequired}>
                <span className="red">required</span>
              </FormHelperText>
            </FormControl>
            <br />
            <br />
            <FormControl required className="formControl">
              <InputLabel htmlFor="tickets">
                {' '}
                Tickets ({this.state.availabletickets} available):{' '}
              </InputLabel>
              <Input
                type="text"
                value={this.state.tickets === 0 ? '' : this.state.tickets}
                onChange={this.ticketChangeHandler}
              ></Input>
            </FormControl>
            <FormHelperText className={this.state.ticketRequired}>
              <span className="red">required</span>
            </FormHelperText>
            <br />
            <br />

            <Typography>Unit Price: Rs. {this.state.unitprice}</Typography>
            <br />

            <Typography>
              Ticket Price: Rs. {this.state.unitprice * this.state.tickets}
            </Typography>
            <br />
            <br />

            <Button
              variant="contained"
              color="primary"
              onClick={this.bookShowButtonHandler}
            >
              BOOK SHOW
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default BookShow;
