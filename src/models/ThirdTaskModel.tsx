import { useStore } from '../store/root.store';
import { Dropdown } from '../components/Dropdown';
import { observer } from 'mobx-react';
import { apiToValues } from '../utils/iterface.utils';
import { ChangeEvent } from 'react';

export const ThirdTaskModel = observer(() => {
	const { thirdTaskStore } = useStore();

	const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		thirdTaskStore.setValue(event.target.value);
		await thirdTaskStore.getFilteredValues(event.target.value);
	};

	return (
		<div>
			<div className={'button-container'}>
				<button onClick={() => thirdTaskStore.setHelpersCount(3)}>
					Set 3
				</button>

				<button onClick={() => thirdTaskStore.setHelpersCount(10)}>
					Set 10
				</button>
			</div>
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
				}}
			/>
		</div>
	);
});
