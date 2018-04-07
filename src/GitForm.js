import React from 'react';

class GitForm extends React.Component{
	
	
	newDataSubmit=(event) => {
		event.preventDefault();

		console.log('Event: submit', this.userName.value);
	};

	render(){
		return(
			<form onSubmit={this.newDataSubmit}>
				<input type="text" ref={(newInput)=>this.userName=newInput}  placeholder="GitHub userName" required/>
				<button type="submit">Add</button>
			</form>

		);
	}
}

export default GitForm;