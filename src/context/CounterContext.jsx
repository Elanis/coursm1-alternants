import { createContext, useCallback, useState } from 'react';

export const CounterContext = createContext(null);

export default function CounterContextProvider({ children }) {
	const [counter, setCounter] = useState(0);

	const increment = useCallback(() => {
		setCounter((oldCounter) => oldCounter + 1);
	}, [setCounter]);

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
