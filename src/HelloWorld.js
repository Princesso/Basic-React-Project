import React, {Component} from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
	render(){
		return (<div className="HelloWorld">{this.state.greeting} {this.props.name}
		<br/>
		<button onClick={this.french}>Frenchy</button>
		<button onClick={this.addOne}>{this.state.counter} </button>
			</div>);
		}

	addOne(){
		this.setState({counter: this.state.counter + 1});
	}


	french(){
		this.setState({greeting:'Bonjour'});
	}

	constructor (props) {
	super(props);
	this.state = { greeting: 'Hello' };
	this.state = {counter : 0 };
	this.french=this.french.bind(this);
	this.addOne=this.addOne.bind(this);
}


}



export default HelloWorld;