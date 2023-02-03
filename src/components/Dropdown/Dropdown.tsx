import { FC } from 'react';
import { DropdownValues } from './interface';
import './dropdown.style.css';
import { Input } from '../Input';

export const Dropdown: FC<DropdownValues> = ({
	values,
	onClick,
	inputProps,
}) => {
	return (
		<div className={'dropdown-container'}>
			<Input
				onChange={inputProps.onChange}
				placeholder={''}
				value={inputProps.value}
			/>
			{!!inputProps.value && (
				<div className={'item-container'}>
					{values &&
						values.map((item, index) => {
							return (
								<div
									key={index}
									className={'dropdown-item'}
									onClick={() => {
										onClick(item.label);
									}}>
									{!!item.iconUrl && (
										<img
											width={'40%'}
											src={item.iconUrl}
											alt={'icon'}
										/>
									)}
									<div>
										<p>{item.label}</p>
										<p>{item.description}</p>
									</div>
								</div>
							);
						})}
				</div>
			)}
		</div>
	);
};
