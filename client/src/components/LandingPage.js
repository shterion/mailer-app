import React, { Component } from 'react';
import DatePicker from './options/DatePicker';
import Header from './common/Header';
import SendOptions from './options/SendOptions';
import SendButton from './common/SendButton';
import EmailInput from './common/EmailInput';
import TextInput from './common/TextInput';
import RepeatType from './options/RepeatType';
import Days from './options/Days';
import Ends from './options/Ends';

import { sendMail } from '../actions/emailActions';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
      text: '',
      date: new Date(),
      repeatType: 'once',
      repeatAt: [],
      neverEnd: false,
      endOn: '',
      endAfterOccurrences: 0,
      sendType: 'now',
      readyToSend: false,
    };
    this.baseState = this.state;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleDaysClick = this.handleDaysClick.bind(this);
    this.handleNeverEnd = this.handleNeverEnd.bind(this);
    this.handleOccurrencesUp = this.handleOccurrencesUp.bind(this);
    this.handleOccurrencesDown = this.handleOccurrencesDown.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value === 'custom' && this.state.repeatType === 'once') {
      return this.setState({ readyToSend: false });
    }

    if (e.target.value === 'now' || e.target.value === 'later') {
      return this.setState({ readyToSend: true });
    }
  }

  handleNeverEnd() {
    this.setState({ neverEnd: !this.state.neverEnd, endOn: '', endAfterOccurrences: 0 });
  }

  handleOccurrencesUp() {
    this.setState({ endOn: '', neverEnd: false });
    this.setState(prevState => ({ endAfterOccurrences: prevState.endAfterOccurrences + 1 }));
  }

  handleOccurrencesDown() {
    this.setState({ endOn: '', neverEnd: false });
    this.setState(prevState => ({ endAfterOccurrences: prevState.endAfterOccurrences - 1 }));
  }

  handleDateChange(date) {
    if (date.endOn) {
      return this.setState({ endOn: date.endOn, neverEnd: false, endAfterOccurrences: 0 });
    }
    this.setState({ date, neverEnd: false });
  }

  handleTypeChange(repeatType) {
    if (repeatType !== 'weekly') {
      this.setState({ repeatAt: [] });
    }
    this.setState({ repeatType });
    this.setState({ readyToSend: true });
  }

  handleDaysClick(day) {
    let days = [...this.state.repeatAt];
    if (this.state.repeatAt.includes(day)) {
      const removedDays = days.filter(incomingDay => incomingDay !== day);
      days = removedDays;
    } else {
      days = [...this.state.repeatAt, day];
    }
    this.setState({ repeatAt: days });
  }

  onSubmit(e) {
    e.preventDefault();
    const email = {
      recipient: this.state.recipient,
      text: this.state.text,
      date: this.state.date,
      sendType: this.state.sendType,
      repeatType: this.state.repeatType,
      repeatAt: this.state.repeatAt,
      neverEnd: this.state.neverEnd,
      endOn: this.state.endOn,
      endAfterOccurrences: this.state.endAfterOccurrences,
    };

    sendMail(email);
    this.setState(this.baseState);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <form onSubmit={this.onSubmit}>
          <EmailInput onChange={this.onChange} name="recipient" value={this.state.recipient} />
          <TextInput onChange={this.onChange} name="text" value={this.state.text} />
          <SendOptions onChange={this.onChange} name="now" now={this.state.sendType} />
          {this.state.sendType === 'custom' && <RepeatType onChange={this.handleTypeChange} />}
          {this.state.repeatType === 'weekly'
					&& this.state.sendType === 'custom' && <Days onChange={this.handleDaysClick} />}
          {(this.state.sendType === 'later' || this.state.sendType === 'custom') && (
          <DatePicker onChange={this.handleDateChange} />
          )}
          {this.state.sendType === 'custom' && (
          <Ends
            onChange={this.onChange}
            handleOccurrencesUp={this.handleOccurrencesUp}
            handleOccurrencesDown={this.handleOccurrencesDown}
            onDateChange={this.handleDateChange}
            handleNeverEnd={this.handleNeverEnd}
          />
          )}
          <SendButton handleClick={this.onSubmit} active={this.state.readyToSend} />
        </form>
      </React.Fragment>
    );
  }
}

export default LandingPage;
