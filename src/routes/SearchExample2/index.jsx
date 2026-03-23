import { useEffect, useState } from "react";

function useCities(postalCode) {
	const [results, setResults] = useState([])

	// A privilegier pour du GET
	useEffect(() => {
		async function fetchCities() {
			const response = await fetch(`https://geo.api.gouv.fr/communes?codePostal=${postalCode}`);
			const data = await response.json();
			setResults(data);
		}

		if (postalCode.length === 5) {
			const timeoutId = setTimeout(() => fetchCities(), 250);
			return () => clearTimeout(timeoutId);
		}
	}, [postalCode]);

	return results;
}

export default function SearchExample2() {
	const [postalCode, setPostalCode] = useState('');
	const result = useCities(postalCode);

	return (
		<>
			<input
				type="text"
				onChange={(e) => setPostalCode(e.target.value)}
			/>
			<ul>
				{result.map((city) => (
					<li key={city.code}> {city.nom} </li>
				))}
			</ul>
		</>
	);
}