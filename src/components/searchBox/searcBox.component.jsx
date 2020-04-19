import React from 'react';

import './searchBox.css';

export const SearchBox = ({ placeholder, onChaneHandeler }) => {
	return <input type="search" className="search" placeholder={placeholder} onChange={onChaneHandeler} />;
};
