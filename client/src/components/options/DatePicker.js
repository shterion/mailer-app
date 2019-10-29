import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

function DatePicker(props) {
	const [ selectedDate, setSelectedDate ] = React.useState(new Date());

	const handleDateChange = (date) => {
		props.onChange(date);
		setSelectedDate(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-around">
				<Grid item xs={12}>
					<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="dd/MM/yyyy"
						margin="normal"
						id="date-picker-inline"
						label="Date picker"
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change date'
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<KeyboardTimePicker
						margin="normal"
						id="time-picker"
						label="Time picker"
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change time'
						}}
					/>
				</Grid>
			</Grid>
		</MuiPickersUtilsProvider>
	);
}

export default DatePicker;
