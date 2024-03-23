import { render, screen } from '@testing-library/react';
import Root from './Root';
import { MockRouterProvider } from '../../../test-mocks/mock-providers.tsx';


jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useRouteError: jest.fn().mockImplementation(() => null),
}));

describe('<Root />', () => {
	test('it should mount', () => {
		render(<MockRouterProvider>
			<Root/>
		</MockRouterProvider>);

		const root = screen.getByTestId('Root');

		expect(root).toBeInTheDocument();
	});
});
