import React from 'react';

class GitForm extends React.Component{
	render(){
		return(
			<form>
				<input type="text" placeholder="GitHub userName"/>
				<button type="submit">Add</button>
			</form>

		);
	}
}

export default GitForm;