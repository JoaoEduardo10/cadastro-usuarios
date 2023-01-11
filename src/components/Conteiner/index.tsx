import { ReactNode } from 'react';
import * as S from './styles';

export type ConteinerProps = {
    children: ReactNode
    height?: boolean
}

export const Conteiner = ({ children, height= false }: ConteinerProps) => {
	return (
		<S.Conteiner aria-label='Conteiner' altura={height}>{children}</S.Conteiner>
	);
};