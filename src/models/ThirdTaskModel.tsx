import { useStore } from '../store/root.store';
import { Dropdown } from '../components/Dropdown';
import { observer } from 'mobx-react';
import { apiToValues } from '../utils/iterface.utils';
import { ChangeEvent } from 'react';
import { InputButtonPosition } from '../components';

export const ThirdTaskModel = observer(() => {
	const { thirdTaskStore } = useStore();

	const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		thirdTaskStore.setValue(event.target.value);
		await thirdTaskStore.getFilteredValues(event.target.value);
	};

	return (
		<div>
			<Dropdown
				values={apiToValues(
					thirdTaskStore.dataSet,
					thirdTaskStore.helpersCount
				)}
				onClick={(item: string) => thirdTaskStore.setValue(item)}
				inputProps={{
					onChange: handleChange,
					placeholder: '',
					value: thirdTaskStore.value,
					buttons: [
						{
							text: 'Set 3',
							position: InputButtonPosition.RIGHT,
							onClick: () => thirdTaskStore.setHelpersCount(3),
						},
						{
							text: 'Set 10',
							position: InputButtonPosition.RIGHT,
							onClick: () => thirdTaskStore.setHelpersCount(10),
						},
					],
				}}
			/>
		</div>
	);
});
