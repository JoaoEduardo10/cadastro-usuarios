import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '.';
import { VpnKey } from '@styled-icons/material-outlined/VpnKey';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GlobalStyled } from '../../styles/globalStyles';

export default {
	title: 'Button',
	component: Button,
	args: {
		children: 'Texto do botão',
		icon: <VpnKey />,
		color: 'primary',

	}as ButtonProps,
	decorators: [
		(Story: any) => {
			return (
				<div style={{ padding: '3.2rem' }}>
					<ThemeProvider theme={theme}>
						<Story />
						<GlobalStyled />
					</ThemeProvider>
				</div>
			);
		},
	],
	argTypes: {
		icon: {
			type: null,
		},
	},
} as unknown as Meta<ButtonProps>;

export const Template: Story<ButtonProps> = (args) => {
	return (
		<div>
			<Button {...args} />
		</div>
	);
};
