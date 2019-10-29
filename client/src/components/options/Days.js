import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';

class Days extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mon: false,
			tue: false,
			wed: false,
			thu: false,
			fri: false,
			sat: false,
			sun: false,
			days: []
		};
		this.setSelected = this.setSelected.bind(this);
	}

	setSelected = (e) => {
		this.setState({ [e.currentTarget.name]: !this.state[e.currentTarget.name] });
		this.props.onChange(e.currentTarget.id);
	};

	render() {
		return (
			<div>
				<ToggleButton id="0" name="mon" value="check" onClick={this.setSelected} selected={this.state.mon}>
					Mon
				</ToggleButton>
				<ToggleButton id="1" name="tue" value="check" onClick={this.setSelected} selected={this.state.tue}>
					Tue
				</ToggleButton>
				<ToggleButton id="2" name="wed" value="check" onClick={this.setSelected} selected={this.state.wed}>
					Wed
				</ToggleButton>
				<ToggleButton id="3" name="thu" value="check" onClick={this.setSelected} selected={this.state.thu}>
					Thu
				</ToggleButton>
				<ToggleButton id="4" name="fri" value="check" onClick={this.setSelected} selected={this.state.fri}>
					Fri
				</ToggleButton>
				<ToggleButton id="5" name="sat" value="check" onClick={this.setSelected} selected={this.state.sat}>
					Sat
				</ToggleButton>
				<ToggleButton id="6" name="sun" value="check" onClick={this.setSelected} selected={this.state.sun}>
					Sun
				</ToggleButton>
			</div>
		);
	}
}
export default Days;
