import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

function RepeatType(props) {
	const classes = useStyles();
	const [ repeatType, setType ] = React.useState('');
	const inputLabel = React.useRef(null);
	const [ labelWidth, setLabelWidth ] = React.useState(0);

	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	const handleChange = (event) => {
		setType(event.target.value);
		props.onChange(event.target.value);
	};

	return (
		<div>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel
					value={'daily'}
					onChange={handleChange}
					ref={inputLabel}
					id="demo-simple-select-outlined-label"
				>
					Repeat
				</InputLabel>
				<Select
					id="demo-simple-select-outlined"
					value={repeatType}
					onChange={handleChange}
					labelWidth={labelWidth}
				>
					<MenuItem value={'daily'}>Daily</MenuItem>
					<MenuItem value={'weekly'}>Weekly</MenuItem>
					<MenuItem value={'monthly'}>Monthly</MenuItem>
					<MenuItem value={'yearly'}>Yearly</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}

export default RepeatType;
