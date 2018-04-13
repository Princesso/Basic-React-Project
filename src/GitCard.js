import React from 'react';
import './gitCard.css';

const GitCard =(props)=>{
	return(

		<div style={{margin: '2em', border: '2px solid black'}}>
			<img width="75" src={props.avatar_url}/>
			<div style={{display: 'inline-block', marginLeft: '10'}}>
				<div style={{fontSize: '2em', fonttWeight: 'bold'}}>{props.name}</div>
				<div>{props.company}</div>
			</div>
		</div>

	);
};



const GitCardList=(props)=>{
	return(
			<div>
				{props.cards.map(card=> 
					<GitCard {...card}/>
				)}
			</div>

		);

};



export default GitCardList;