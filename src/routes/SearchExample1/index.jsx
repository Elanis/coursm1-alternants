import { useState } from "react";

export default function SearchExample1() {
	const [postalCode, setPostalCode] = useState('');
	const [result, setResult] = useState([])

	const loadCities = async () => {
		fetch(`https://geo.api.gouv.fr/communes?codePostal=${postalCode}`)
			.then(res => res.json())
			.then(setResult)
			.catch((err) => console.error('Error during cities loading:', err));
	}

	// POST/PUT/DELETE, ou bien, un GET "complexe"
	async function search() {
		const res = await fetch(`https://geo.api.gouv.fr/communes?codePostal=${postalCode}`);
		const data = await res.json();

		setResult(data);
	}

	return (
		<>
			<input
				type="text"
				onChange={(e) => setPostalCode(e.target.value)}
			/>
			<button onClick={loadCities}>Load Cities</button>
			<ul>
				{result.map((city) => (
					<li key={city.code}> {city.nom} </li>
				))}
			</ul>
		</>
	);
}