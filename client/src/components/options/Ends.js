import React, { Component } from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Occurence from './Occurrence';

class Ends extends Component {
	constructor(props) {
		super(props);
		this.state = {
			neverEnd: false,
			endOnCheck: false,
			endAfterOccurrencesCheck: false,
			endOn: new Date(),
			endAfterOccurrences: 0
		};

		this.handleTypeChange = this.handleTypeChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.baseState = this.state;
	}

	handleTypeChange(e) {
		if ([ e.currentTarget.name ][0] === 'neverEnd') {
			this.setState(this.baseState);
			this.props.handleNeverEnd();
			return;
		}
		this.setState(this.baseState);
		this.setState({ [e.currentTarget.name]: !this.state[e.currentTarget.name] });
	}

	handleDateChange(date) {
		this.setState({ endOn: date });
		this.props.onDateChange({ endOn: date, endAfterOccurrences: 0 });
	}
	render() {
		const { value, handleOccurrencesUp, handleOccurrencesDown } = this.props;
		const { endOnCheck, endAfterOccurrencesCheck } = this.state;

		const datePicker = (
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					disableToolbar
					variant="inline"
					format="dd/MM/yyyy"
					margin="normal"
					id="date-picker-inline"
					label="Date picker"
					value={this.state.endOn}
					onChange={this.handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date'
					}}
				/>
				<KeyboardTimePicker
					margin="normal"
					id="time-picker"
					label="Time picker"
					value={this.state.endOn}
					onChange={this.handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change time'
					}}
				/>
			</MuiPickersUtilsProvider>
		);

		return (
			<div>
				<br /> <br />
				<Grid container spacing={0}>
					<Grid item xs={4} />
					<Grid item xs={2}>
						<FormControl component="fieldset">
							<FormLabel component="legend">Ends</FormLabel>
							<RadioGroup
								aria-label="ends"
								name="position"
								value={value}
								onChange={this.handleTypeChange}
							>
								<FormControlLabel
									control={<Radio color="primary" />}
									label="Never"
									id="never"
									value="true"
									name="neverEnd"
								/>
								<FormControlLabel
									control={<Radio color="primary" />}
									label="On"
									id="on"
									value="on"
									name="endOnCheck"
								/>
								<FormControlLabel
									control={<Radio color="primary" />}
									label="After"
									id="after"
									value="after"
									name="endAfterOccurrencesCheck"
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid item xs={2}>
						{endOnCheck && datePicker}
						{endAfterOccurrencesCheck && (
							<Occurence
								handleOccurrencesUp={handleOccurrencesUp}
								handleOccurrencesDown={handleOccurrencesDown}
							/>
						)}
					</Grid>
					<Grid item xs={4} />
				</Grid>
			</div>
		);
	}
}

export default Ends;
