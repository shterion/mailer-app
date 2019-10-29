import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	textarea: {
		width: '495px',
		borderRadius: '5px',
		resize: 'none'
	}
}));

const TextInput = ({ value, name, onChange }) => {
	const classes = useStyles();
	return (
		<Grid item xs={12}>
			<TextareaAutosize
				placeholder="Type here ..."
				className={classes.textarea}
				rows={14}
				aria-label="maximum height"
				value={value}
				name={name}
				onChange={onChange}
				required
			/>
		</Grid>
	);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default TextInput;
