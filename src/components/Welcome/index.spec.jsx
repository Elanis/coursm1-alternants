import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Welcome from './index.jsx';

describe('Footer', () => {
	it('It renders', () => {
		const name = "Axel";

		render(
			<Welcome
				name={name}
			/>
		);

		expect(screen.getAllByText(new RegExp('Welcome ' + name, 'i'))[0]).toBeInTheDocument();
		/// === expect(screen.getAllByText(/Footer/i)[0]).toBeInTheDocument();
	});
	it('It renders with "Test"', () => {
		const name = "Test";

		render(
			<Welcome
				name={name}
			/>
		);

		expect(screen.getAllByText(new RegExp('Coucou', 'i'))[0]).toBeInTheDocument();
		/// === expect(screen.getAllByText(/Footer/i)[0]).toBeInTheDocument();
	});
});
