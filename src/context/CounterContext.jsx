import { createContext, useCallback, useEffect, useState } from 'react';

export const CounterContext = createContext(null);

export default function CounterContextProvider({ children }) {
	const [counter, setCounter] = useState(
		Number.parseInt(localStorage.counter, 10) || 0
	);

	const increment = useCallback(() => {
		setCounter((oldCounter) => oldCounter + 1);
	}, [setCounter]);

	useEffect(() => {
		localStorage.counter = counter;
	}, [counter]);

	return (
		<CounterContext.Provider value={{
			counter,
			setCounter,
			increment,
		}}>
			{children}
		</CounterContext.Provider>
	);
}
