import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Conteiner, ConteinerProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

export default {
	title: 'Conteiner',
	component: Conteiner,
	args: {
		children: 'Conteiner'
	} as ConteinerProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof Conteiner> = (agrs: ConteinerProps) => {
	return <Conteiner  {...agrs} />;
};