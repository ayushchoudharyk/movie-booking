import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Typography from '@material-ui/core/Typography';
import './BookShow.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Link } from 'react-router-dom';

class BookShow extends Component {
    state = {
            location: "",
            theatre: "",
            language: "",
            showDate: "",
            tickets: 0,
            unitPrice: 500,
            availableTickets: 20,
            reqLocation: "dispNone",
            reqTheatre: "dispNone",
            reqLanguage: "dispNone",
            reqShowDate: "dispNone",
            reqTickets: "dispNone",
            locations: [],
            languages: [],
            theatres: [],
            showDates: [],
            showTimes: [],
            originalShows: []
    }
    
    componentWillMount() {
       
        let dataShows = null;
        let xhrShows = new XMLHttpRequest();
        xhrShows.addEventListener("readystatechange", (function () {
            if (xhrShows.readyState === 4) {
                debugger;
                let response = JSON.parse(xhrShows.responseText)[0];
                this.setState({ originalShows: response.shows });
                let newLocations = [];

                for (let show of response.shows) {
                    newLocations.push({ id: show.theatre.city, location: show.theatre.city });
                }

                newLocations = newLocations.filter((loc, index, self) =>
                    index === self.findIndex((c) => (
                        c.id === loc.id
                    ))
                )

                this.setState({ locations: newLocations })
            }
        }).bind(this));

        xhrShows.open("GET", this.props.baseUrl + "movies/" + this.props.match.params.id);
        xhrShows.setRequestHeader("Cache-Control", "no-cache");
        xhrShows.send(dataShows);
    }

    locationChangeHandler = ((event) => {
        debugger;
        this.setState({ location: event.target.value });
        let newTheatres = [];

        for (let show of this.state.originalShows) {
            if (show.theatre.city === event.target.value) {
                newTheatres.push({ id: show.theatre.name, theatre: show.theatre.name });
            }
        }

        newTheatres = newTheatres.filter((theatre, index, self) =>
            index === self.findIndex((t) => (
                t.id === theatre.id
            ))
        )

        this.setState({ theatres: newTheatres });
    }).bind(this);

    theatreChangeHandler = ((event) => {
        this.setState({ theatre: event.target.value });

        let newLanguages = [];

        for (let show of this.state.originalShows) {
            if (show.theatre.city === this.state.location && show.theatre.name === event.target.value) {
                newLanguages.push({ id: show.language, language: show.language });
            }
        }

        newLanguages = newLanguages.filter((lang, index, self) =>
            index === self.findIndex((l) => (
                l.id === lang.id
            ))
        )
        this.setState({ languages: newLanguages });
    }).bind(this);

    languageChangeHandler = ((event) => {
        this.setState({ language: event.target.value });

        let newShowDates = [];

        for (let show of this.state.originalShows) {
            if (show.theatre.city === this.state.location && show.theatre.name === this.state.theatre && show.language === event.target.value) {
                newShowDates.push({ id: show.show_timing, showDate: show.show_timing });
            }
        }

        newShowDates = newShowDates.filter((date, index, self) =>
            index === self.findIndex((d) => (
                d.id === date.id
            ))
        )

        this.setState({ showDates: newShowDates });
    }).bind(this);

    showDateChangeHandler = ((event) => {
        this.setState({ showDate: event.target.value });

        let unitPrice = 0;
        let availableTickets = 0;

        for (let show of this.state.originalShows) {
            if (show.theatre.city === this.state.location && show.theatre.name === this.state.theatre && show.language === this.state.language && show.show_timing === event.target.value) {
                unitPrice = show.unit_price;
                availableTickets = show.available_seats;
                debugger;
                this.setState({ showId: show.id });
            }
        }

        this.setState({ unitPrice: unitPrice, availableTickets: availableTickets });
    }).bind(this);

    ticketsChangeHandler = ((event) => {
        this.setState({ tickets: event.target.value.split(",") });
    }).bind(this);

    bookShowButtonHandler = (() => {
        this.state.location === "" ? this.setState({ reqLocation: "dispBlock" }) : this.setState({ reqLocation: "dispNone" });
        this.state.theatre === "" ? this.setState({ reqTheatre: "dispBlock" }) : this.setState({ reqTheatre: "dispNone" });
        this.state.language === "" ? this.setState({ reqLanguage: "dispBlock" }) : this.setState({ reqLanguage: "dispNone" });
        this.state.showDate === "" ? this.setState({ reqShowDate: "dispBlock" }) : this.setState({ reqShowDate: "dispNone" });
        this.state.tickets === 0 ? this.setState({ reqTickets: "dispBlock" }) : this.setState({ reqTickets: "dispNone" });

        if ((this.state.location === "") || (this.state.theatre === "") || (this.state.language === "") || (this.state.showDate === "") || (this.state.tickets === 0)) { return; }
        debugger;
        this.props.history.push({
            pathname: '/confirm/' + this.props.match.params.id,
            bookingSummary: this.state
        })
    }).bind(this);

    render() {
        return (
            <div>
                <Header />
                <div className="bookShow">
                    <Typography className="back" >
                        <Link to={"/movie/" + this.props.match.params.id}>&#60; Back to Movie Details</Link>
                    </Typography>

                    <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                BOOK SHOW
                            </Typography><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="location">Choose Location:</InputLabel>
                                <Select
                                    value={this.state.location}
                                    onChange={this.locationChangeHandler}
                                >
                                    {this.state.locations.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className={this.state.reqLocation}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="theatre">Choose Theatre:</InputLabel>
                                <Select
                                    value={this.state.theatre}
                                    onChange={this.theatreChangeHandler}
                                >
                                    {this.state.theatres.map(th => (
                                        <MenuItem key={"theatre" + th.id} value={th.theatre}>
                                            {th.theatre}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className={this.state.reqTheatre}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="language">Choose Language:</InputLabel>
                                <Select
                                    value={this.state.language}
                                    onChange={this.languageChangeHandler}
                                >
                                    {this.state.languages.map(lang => (
                                        <MenuItem key={"lang" + lang.id} value={lang.language}>
                                            {lang.language}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className={this.state.reqLanguage}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showDate">Choose Show Date:</InputLabel>
                                <Select
                                    value={this.state.showDate}
                                    onChange={this.showDateChangeHandler}
                                >
                                    {this.state.showDates.map(sd => (
                                        <MenuItem key={"showDate" + sd.id} value={sd.showDate}>
                                            {sd.showDate}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className={this.state.reqShowDate}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="tickets">Seat Selection: ( {this.state.availableTickets} available )</InputLabel>
                                <Input id="tickets" value={this.state.tickets !== 0 ? this.state.tickets : ""} onChange={this.ticketsChangeHandler} />
                                <FormHelperText className={this.state.reqTickets}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Typography>
                                Unit Price: Rs. {this.state.unitPrice}
                            </Typography>
                            <br />
                            <Typography>
                                Total Price: Rs. {this.state.unitPrice * this.state.tickets.length}
                            </Typography>
                            <br /><br />
                            <Button variant="contained" onClick={this.bookShowButtonHandler} color="primary">
                                BOOK SHOW
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default BookShow;