import React from 'react';
import PropTypes from 'prop-types';

const CharacterGrid = ({ items, isLoading }) => {
	return isLoading ? (
		<h1>Loading...</h1>
	) : (
		<section className='cards'>Test</section>
	);
};

export default CharacterGrid;
