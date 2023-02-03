import { CountryInfo } from '../api/apiService';
import { Values } from '../components/Dropdown';

export function apiToValues(
	apiArray: CountryInfo[] = [],
	maxValue: number = 50
): Values[] {
	return apiArray
		.map((item) => {
			return {
				label: item.name,
				description: item.fullName,
				iconUrl: item.flag,
			};
		})
		.slice(0, maxValue);
}
