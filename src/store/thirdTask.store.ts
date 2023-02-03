import { RootStore } from './root.store';
import { action, makeObservable, observable } from 'mobx';
import { CountryInfo, getCountryByName } from '../api/apiService';
import { BaseStore } from './base.store';

export class ThirdTaskStore extends BaseStore {
	rootStore: RootStore;
	dataSet: Array<CountryInfo> = [];
	helpersCount: number = 30;

	constructor(rootStore: RootStore) {
		super();
		this.rootStore = rootStore;
		makeObservable(this, {
			value: observable,
			dataSet: observable,
			helpersCount: observable,
			setValue: action,
			getFilteredValues: action,
			setHelpersCount: action,
		});
	}

	async getFilteredValues(value: string) {
		this.dataSet = await getCountryByName(value);
	}

	setHelpersCount(value: number) {
		this.helpersCount = value;
	}
}
