import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

const SendOptions = ({ value, onChange }) => {
	return (
		<div>
			<FormControl component="fieldset">
				<RadioGroup aria-label="position" name="position" value={value} onChange={onChange} row>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<FormControlLabel
								control={<Radio color="primary" />}
								labelPlacement="start"
								label="Now"
								id="now"
								value="now"
								name="sendType"
							/>
						</Grid>
						<Grid item xs={4}>
							<FormControlLabel
								control={<Radio color="primary" />}
								labelPlacement="start"
								label="Later"
								id="later"
								value="later"
								name="sendType"
							/>
						</Grid>
						<Grid item xs={4}>
							<FormControlLabel
								control={<Radio color="primary" />}
								labelPlacement="start"
								label="Custom"
								id="custom"
								value="custom"
								name="sendType"
							/>
						</Grid>
					</Grid>
				</RadioGroup>
			</FormControl>
		</div>
	);
};

export default SendOptions;
