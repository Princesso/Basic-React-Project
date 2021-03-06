import React from 'react';

import axios from 'axios';



class GitForm extends React.Component{

	state = { userName :'' }

	newDataSubmit=(event) => {
		event.preventDefault();

		console.log('Event: submit', this.state.userName);

		axios.get(`https://api.github.com/users/${this.state.userName}`)
		.then(response=>{
			console.log(response);
			this.props.onSubmit(response.data);
		});
	};

	
	render(){
		return(

			<form onSubmit={this.newDataSubmit} >
				<input 
				type="text" 
				value={this.state.userName}  
				onChange={(event) => this.setState({userName: event.target.value})} 
				placeholder="GitHub userName" required
				style={{margin: '2em', border: '2px solid black'}}
				/>

				<button type="submit">Add</button>
			</form>

		);
	}
}

export default GitForm;