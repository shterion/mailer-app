import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: '500px'
	}
}));

const EmailInput = ({ value, name, onChange }) => {
	const classes = useStyles();
	return (
		<Grid item xs={12}>
			<TextField
				id="outlined-email-input"
				label="Email"
				className={classes.textField}
				type="email"
				fullWidth
				autoComplete="email"
				margin="normal"
				variant="outlined"
				value={value}
				name={name}
				onChange={onChange}
				required
			/>
		</Grid>
	);
};

EmailInput.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default EmailInput;
