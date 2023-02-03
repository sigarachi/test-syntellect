import { Input, InputButtonPosition } from '../components';
import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../store/root.store';

export const FirstTaskModel = observer(() => {
	const { firstTaskStore } = useStore();

	return (
		<>
			<Input
				onChange={(event) => firstTaskStore.setValue(event.target.value)}
				value={firstTaskStore.value}
				placeholder={''}
				buttons={[
					{
						text: 'Clear',
						onClick: () => {
							firstTaskStore.setValue('');
						},
						position: InputButtonPosition.RIGHT,
					},
					{
						text: 'Set value',
						onClick: () => {
							firstTaskStore.setValue('Hello world!');
						},
						position: InputButtonPosition.RIGHT,
					},
				]}
			/>
		</>
	);
});
