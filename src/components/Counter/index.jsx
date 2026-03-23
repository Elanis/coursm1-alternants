import { useContext, useEffect } from 'react';
import { CounterContext } from '../../context/CounterContext';
import './index.css';

export default function Counter() {
	const { counter, setCounter } = useContext(CounterContext)

	useEffect(() => {
		document.title = `Counter ${counter}`;
	}, [counter]);

	return (
		<>
			<button
				className="counter-button"
				onClick={() => setCounter((currCount) => currCount + 1)}>
				count is {counter}
			</button>

			<input
				type="text"
				onChange={(e) => console.log(e.target.value)}
				placeholder="test"
			/>
		</>
	);
}
