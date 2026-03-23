import { useEffect, useState } from 'react';
import './index.css';

export default function Counter() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `Counter ${count}`;
	}, [count]);

	return (
		<>
			<button
				className="counter-button"
				onClick={() => setCount((currCount) => currCount + 1)}>
				count is {count}
			</button>
		</>
	);
}
