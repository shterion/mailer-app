import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TypoGraphy from '@material-ui/core/Typography';

class Occurence extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
		this.handleUp = this.handleUp.bind(this);
		this.handleDown = this.handleDown.bind(this);
	}

	handleUp() {
		this.setState({ value: this.state.value + 1 });
		this.props.handleOccurrencesUp(this.state.value);
	}

	handleDown() {
		if (this.state.value === 0) {
			return;
		}
		this.setState({ value: this.state.value - 1 });
		this.props.handleOccurrencesDown(this.state.value);
	}

	render() {
		return (
			<div>
				{' '}
				<TypoGraphy variant="subtitle1" color="primary">
					Occurences:
				</TypoGraphy>
				<br />
				<Grid container justify="center" spacing={0}>
					<Grid item xs={3}>
						<IconButton aria-label="delete" size="small" onClick={this.handleUp}>
							<ArrowUpwardIcon fontSize="inherit" />
						</IconButton>
					</Grid>
					<Grid item xs={3}>
						<Paper>{this.state.value}</Paper>
					</Grid>
					<Grid item xs={3}>
						<IconButton aria-label="delete" size="small" onClick={this.handleDown}>
							<ArrowDownwardIcon fontSize="inherit" />
						</IconButton>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Occurence;
