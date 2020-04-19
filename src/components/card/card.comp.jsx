import React from 'react';
import './card.css';

export const Card = (props) => {
	return (
		<div className="card_container">
			<img src={`https://robohash.org/${props.monister.id}.png?set=set2&size=180x180`} />
			<h2>{props.monister.name}</h2>
			<p>{props.monister.email}</p>
		</div>
	);
};
