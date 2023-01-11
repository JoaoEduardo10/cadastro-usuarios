import { screen } from '@testing-library/react';
import { Conteiner } from '.';
import { renderTheme } from '../../utils/renderTheme';

describe('<Conteiner />', () => {
	it('should render a Components Conteiner with  height 100%', () => {
		const { container } = renderTheme(<Conteiner>Children</Conteiner>);

		const conteiner = screen.getByLabelText('Conteiner');

		expect(conteiner).toHaveStyleRule('height', '100%');

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render a Components Conteiner with  height 100vh', () => {
		const { container } = renderTheme(<Conteiner height>Children</Conteiner>);

		const conteiner = screen.getByLabelText('Conteiner');

		expect(conteiner).toHaveStyleRule('height', '100vh');

		expect(container.firstChild).toMatchSnapshot();
	});
});