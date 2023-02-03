import { Input, InputButtonPosition } from '../components';
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../store/root.store';

export const SecondTaskModel = observer(() => {
	const { secondTaskStore } = useStore();
	const handleClick = (text: string) => {
		if (!isNaN(+text)) alert(text);
	};
	return (
		<>
			<Input
				onChange={(event) =>
					secondTaskStore.setValue(event.target.value)
				}
				value={secondTaskStore.value}
				placeholder={''}
				buttons={[
					{
						text: 'Alert value',
						onClick: () => {
							alert(secondTaskStore.value);
						},
						position: InputButtonPosition.RIGHT,
					},
					{
						text: 'Is a Number?',
						onClick: () => {
							handleClick(secondTaskStore.value);
						},
						position: InputButtonPosition.LEFT,
					},
				]}
			/>
		</>
	);
});
