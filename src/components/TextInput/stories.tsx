/* eslint-disable react/react-in-jsx-scope */
import { Meta, Story } from '@storybook/react/types-6-0';
import { TextInput, TextInputProps } from '.';
import { AlternateEmail } from '@styled-icons/material-outlined/AlternateEmail';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GlobalStyled } from '../../styles/globalStyles';

export default {
	title: 'TextInput',
	component: TextInput,
	args: {
		label: 'Teste label',
		name: 'input-name',
		type: 'text',
		disabled: false,
		errorMessage: '',
	},
	parameters: {
		layout: 'fullscreen',
	},
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
		value: {
			type: {
				name: 'string',
			},
		},
		type: {
			control: {
				type: 'select',
				options: ['text', 'password', 'email'],
			},
		},
	},
} as unknown as Meta<TextInputProps>;

export const Template: Story<TextInputProps> = (args) => {
	return (
		<div>
			<TextInput {...args} />
		</div>
	);
};

export const OnError: Story<TextInputProps> = (args) => {
	return (
		<div>
			<TextInput {...args} />
		</div>
	);
};

OnError.args = {
	errorMessage: 'Something went wrong, Sorry!',
	value: 'Something you typed',
	icon: <AlternateEmail />,
};

export const WithText: Story<TextInputProps> = (args) => {
	return (
		<div>
			<TextInput {...args} />
		</div>
	);
};

WithText.args = {
	value: 'Something you typed',
};

export const WithIcon: Story<TextInputProps> = (args) => {
	return (
		<div>
			<TextInput {...args} />
		</div>
	);
};

WithIcon.args = {
	value: 'Something you typed',
	icon: <AlternateEmail />,
};

export const Disabled: Story<TextInputProps> = (args) => {
	return (
		<div>
			<TextInput {...args} />
		</div>
	);
};

Disabled.args = {
	value: 'Something you typed',
	icon: <AlternateEmail />,
	disabled: true,
};

export const TextArea: Story<TextInputProps> = (args) => {
	return (
		<div>
			<TextInput {...args} />
		</div>
	);
};

TextArea.args = {
	value: 'Something you typed',
	icon: <AlternateEmail />,
	as: 'textarea',
};
