import React from 'react';
import ReactDOM from 'react-dom'

console.log(React);

class Empire extends React.Component{
	
	/*getInitialState(){
		return {
			rebelLocation:''
		};
	}*/

	constructor(props, context){
		super(props, context);
		this.state = {
			rebelLocation:''
		};
		this.reportRebelLocation = this.reportRebelLocation.bind(this);
	}

	reportRebelLocation(newLocation){
		this.setState({
			rebelLocation: newLocation
		});
	}

	render(){
		return(
			<div>
				<h1>Empire</h1>
				<ImperialArmy
					rebelLocation={this.state.rebelLocation}
					updateLocation={this.reportRebelLocation}
				/>
				<ImperialNavy 
					rebelLocation={this.state.rebelLocation}
				/>
				<MilitaryIntel 
					rebelLocation={this.state.rebelLocation}
				/>
			</div>
		);
	}
}

class ImperialArmy extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			troopCount:0
		};
	}
	render(){
		return(
			<div>
				<h2>Imperial army 
					{!!this.props.rebelLocation && 
						<span>
							| Attack -> {this.props.rebelLocation}
						</span>
					}
				</h2>
				<StormTrooper
					rebelLocation={this.props.rebelLocation}
					updateLocation={this.props.updateLocation}
				/>
				<ATAT/>
				<ATST/>
			</div>
		);
	}
}

class ImperialNavy extends React.Component{
	render(){
		return(
			<div>
				<h2>Imperial navy 
					{!!this.props.rebelLocation && 
						<span>
							| Attack -> {this.props.rebelLocation}
						</span>
					}
				</h2>
				<TIEFighter/>
				<StarDestroyer/>
			</div>
		);
	}
}

class MilitaryIntel extends React.Component{
	render(){
		return(
			<div>
				<h2>MilitaryIntel 
					{!!this.props.rebelLocation && 
						<span>
							| Attack -> {this.props.rebelLocation}
						</span>
					}
				</h2>
				<BountyHunter />
				<ProbeDroid />
			</div>
		);
	}
}

class StormTrooper extends React.Component{
	constructor(props){
		super(props);
		this.discoverLocation = this.discoverLocation.bind(this);
		this.reportRebelLocation = this.reportRebelLocation.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.reportRebelLocationEnter = this.reportRebelLocationEnter.bind(this);
		this.state = {
			rebelLocation: 'Rebels not found'
		};
	}
	
	discoverLocation(event){
		console.log('this',this);
		this.setState({
			rebelLocation: event.target.value
		});
	}

	reportRebelLocationEnter(event){
		if(event.key === 'Enter'){
			this.props.updateLocation(this.state.rebelLocation);
		}
	}

	reportRebelLocation(){
		this.props.updateLocation(this.state.rebelLocation);
	}

	handleChange(event){
		this.setState({
			rebelLocation: event.target.value
		});
	}

	render(){
		return(
			<div>
				<p>StormTrooper</p>
				<input 
					type="text"
					value={this.state.rebelLocation}
					onChange={this.handleChange}
					onKeyPress={this.reportRebelLocationEnter}
					ref="secretBaseLocation"
				/>
				<button onClick={this.reportRebelLocation}>
					Reportar ubicacion
				</button>
			</div>
		);
	}
}
StormTrooper.propTypes = {
	updateLocation: React.PropTypes.func
};

class ATAT extends React.Component{
	render(){
		return(
			<p>ATAT</p>
		);
	}
}

class ATST extends React.Component{
	render(){
		return(
			<p>ATST</p>
		);
	}
}

class TIEFighter extends React.Component{
	render(){
		return(
			<p>TIEFighter</p>
		);
	}
}

class StarDestroyer extends React.Component{
	render(){
		return(
			<p>StarDestroyer</p>
		);
	}
}

class BountyHunter extends React.Component{
	render(){
		return(
			<p>BountyHunter</p>
		);
	}
}

class ProbeDroid extends React.Component{
	render(){
		return(
			<p>ProbeDroid</p>
		);
	}
}

ReactDOM.render(
	<Empire/>,
	document.getElementById('root')
);