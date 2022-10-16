import React, { Component } from 'react';
import Header from '../../common/header/Header';
import './Confirmation.css';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import green from '@material-ui/core/colors/green';
import { Link } from 'react-router-dom';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  success: {
    color: green[600],
  }
});

class Confirmation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      bookingId: "",
      couponCode: "",
      totalPrice: 0,
      originalTotalPrice: 0
    }
  }

  componentDidMount() {
    let currentState = this.state;
    currentState.totalPrice = currentState.originalTotalPrice = parseInt(this.props.location.bookingSummary.unitPrice, 10) * parseInt(this.props.location.bookingSummary.tickets.length, 10);
    this.setState({ state: currentState });
    debugger;
  }

  confirmBookingHandler = () => {
    console.log(this.props.location.bookingSummary.showId);
    let data = JSON.stringify({
      "customerUuid": sessionStorage.getItem('uuid'),
      "bookingRequest": {
        "coupon_code": this.state.couponCode,
        "show_id": this.props.location.bookingSummary.showId,
        "tickets": [
          this.props.location.bookingSummary.tickets.toString()
        ]
      }
    });

    let that = this;
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        debugger;
        that.setState({ bookingId: JSON.parse(this.responseText).reference_number });
      }
    });

    xhr.open("POST", this.props.baseUrl + "auth/bookings");
    xhr.setRequestHeader("Authorization", "Bearer " + sessionStorage.getItem('access-token'));
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    console.log(data);
    debugger;
    xhr.send(data);

    this.setState({ open: true });
  }

  snackBarCloseHandler = () => {
    this.props.history.push("/");
  }

  couponCodeChangeHandler = (e) => {
    this.setState({ couponCode: e.target.value });
  }

  couponApplyHandler =( () => {
    console.log(this.state.couponCode);
    let that = this;
    let data = null;
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        let currentState = that.state;
        debugger;
        var obj = JSON.parse(this.responseText);
        let discountValue = obj.discountValue;
        
        if (discountValue !== undefined && discountValue > 0) {
          currentState.totalPrice = that.state.originalTotalPrice - ((that.state.originalTotalPrice * discountValue) / 100);
          that.setState({ currentState });
        } else {
          currentState.totalPrice = that.state.originalTotalPrice;
          that.setState({ currentState });
        }
      }
    });

    xhr.open("GET", this.props.baseUrl + "auth/coupons?code=" + this.state.couponCode);
    xhr.setRequestHeader("Authorization", "Bearer " + sessionStorage.getItem('access-token'));
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
  }).bind(this);

  render() {
    const { classes } = this.props;

    return (
      <div className="Details">
        <Header />

        <div className="confirmation marginTop16">
          <div>
            <Link to={"/bookshow/" + this.props.match.params.id}>
              <Typography className="back" >
                &#60; Back to Book Show
                </Typography>
            </Link>
            <br />

            <Card className="cardStyle">
              <CardContent>
                <Typography variant="headline" component="h2">
                  SUMMARY
                </Typography>
                <br />

                <div className="coupon-container">
                  <div className="confirmLeft">
                    <Typography>Location:</Typography>
                  </div>
                  <div>
                    <Typography>{this.props.location.bookingSummary.location}</Typography>
                  </div>
                </div>
                <br />

                <div className="coupon-container">
                  <div className="confirmLeft">
                    <Typography>Theatre:</Typography>
                  </div>
                  <div>
                    <Typography>{this.props.location.bookingSummary.theatre}</Typography>
                  </div>
                </div>
                <br />

                <div className="coupon-container">
                  <div className="confirmLeft">
                    <Typography>Language:</Typography>
                  </div>
                  <div>
                    <Typography>{this.props.location.bookingSummary.language}</Typography>
                  </div>
                </div>
                <br />

                <div className="coupon-container">
                  <div className="confirmLeft">
                    <Typography>Show Date:</Typography>
                  </div>
                  <div>
                    <Typography>{this.props.location.bookingSummary.showDate}</Typography>
                  </div>
                </div>
                <br />

                <div className="coupon-container">
                  <div className="confirmLeft">
                    <Typography>Tickets:</Typography>
                  </div>
                  <div>
                    <Typography>{this.props.location.bookingSummary.tickets.toString()}</Typography>
                  </div>
                </div>
                <br />

                <div className="coupon-container">
                  <div className="confirmLeft">
                    <Typography>Unit Price:</Typography>
                  </div>
                  <div>
                    <Typography>{this.props.location.bookingSummary.unitPrice}</Typography>
                  </div>
                </div>
                <br />

                <div className="coupon-container">
                  <div>
                    <FormControl className="formControl">
                      <InputLabel htmlFor="coupon">
                        <Typography>Coupon Code</Typography>
                      </InputLabel>
                      <Input id="coupon" onChange={this.couponCodeChangeHandler} />
                    </FormControl>
                  </div>
                  <div className="marginApply">
                    <Button variant="contained" onClick={this.couponApplyHandler.bind(this)} color="primary">Apply</Button>
                  </div>
                </div>
                <br /><br />

                <div className="coupon-container">
                  <div className="confirmLeft">
                    <span className="bold">Total Price:</span>
                  </div>
                  <div>{parseInt(this.state.totalPrice, 10)}</div>
                </div>
                <br />

                <Button variant="contained" onClick={this.confirmBookingHandler} color="primary">
                  Confirm Booking
                  </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          className="snackbar"
          open={this.state.open}
          onClose={this.snackBarCloseHandler}
          message={
            <span id="client-snackbar" className={classes.success}>
              <div className="confirm"><div><CheckCircleIcon /></div><div className="message"> Booking Confirmed!</div></div>
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.snackBarCloseHandler}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    )
  }
}

Confirmation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Confirmation);