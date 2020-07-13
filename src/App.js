import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(
				'https://www.breakingbadapi.com/api/characters'
			);

			setItems(result.data);
			setLoading(false);
		};

		fetchItems();
	}, []);

	return (
		<div>
			<Header />
			<CharacterGrid setLoading={setLoading} items={items} />
		</div>
	);
};

export default App;
