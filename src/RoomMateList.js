import React, {Component} from 'react';
import './roomMateList.css';

import HelloWorld from './HelloWorld';

class RoomMateList extends Component{

	render(){
		return(
				<div className="RoomMateList">
				<HelloWorld name="Vivian"/>
				<HelloWorld name="Sarah"/>
				</div>
			);
	}

	constructor (props){
		super(props);
		this.state = {greetings: ['Egwu','Egbuna']}
	}
}

export default RoomMateList;
