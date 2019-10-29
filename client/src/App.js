import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"; import LandingPage from "./components//LandingPage";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={LandingPage} />
				</div>
			</Router>
		)
	}
}

export default App;
