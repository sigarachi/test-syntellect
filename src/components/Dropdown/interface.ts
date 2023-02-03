import { InputProps } from '../Input';

export interface Values {
	label: string;
	description?: string;
	iconUrl?: string;
}
export interface DropdownValues {
	values: Array<Values>;
	onClick: (label: string) => void;
	inputProps: InputProps;
}
