import { FC, useMemo } from 'react';
import { InputButtonPosition, InputProps } from './interfaces';
import './input.style.css';

export const Input: FC<InputProps> = ({
	onChange,
	buttons,
	placeholder,
	defaultValue,
	value,
}) => {
	const buttonsLeft = useMemo(
		() =>
			buttons!?.filter((item) => item.position === InputButtonPosition.LEFT),
		[buttons]
	);
	const buttonsRight = useMemo(
		() =>
			buttons!?.filter((item) => item.position === InputButtonPosition.RIGHT),
		[buttons]
	);

	return (
		<div className={'input-container'}>
			<div className={'input-buttons'}>
				{buttonsLeft &&
					!!buttonsLeft.length &&
					buttonsLeft.map((button, index) => {
						return (
							<button key={index} onClick={button.onClick}>
								{button.text}
							</button>
						);
					})}
			</div>
			<input
				onChange={(event) => onChange(event)}
				placeholder={placeholder}
				defaultValue={defaultValue}
				value={value}
			/>
			<div className={'input-buttons'}>
				{buttonsRight &&
					!!buttonsRight.length &&
					buttonsRight.map((button, index) => {
						return (
							<button key={index} onClick={button.onClick}>
								{button.text}
							</button>
						);
					})}
			</div>
		</div>
	);
};
