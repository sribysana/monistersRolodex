import React from 'react';
import './cardlist.css';
import { Card } from '../card/card.comp';

const CardList = (props) => {
	return (
		<div className="card-list">
			{props.monisters.map((monister, ind) => <Card monister={monister} key={`${monister.name}_${ind}`} />)}
		</div>
	);
};

export default CardList;
