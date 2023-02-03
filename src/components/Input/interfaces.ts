import { ChangeEventHandler } from 'react';

export enum InputButtonPosition {
	LEFT = 'LEFT',
	RIGHT = 'RIGHT',
}
export interface InputButton {
	text: string;
	onClick: () => void;
	position: InputButtonPosition;
}
export interface InputProps {
	buttons?: Array<InputButton>;
	placeholder?: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	defaultValue?: string;
	value?: string;
}
