import { RootStore } from './root.store';
import { action, makeObservable, observable } from 'mobx';
import { BaseStore } from './base.store';

export class FirstTaskStore extends BaseStore {
	private rootStore: RootStore;
	constructor(rootStore: RootStore) {
		super();
		this.rootStore = rootStore;
		makeObservable(this, {
			value: observable,
			setValue: action,
		});
	}
}
