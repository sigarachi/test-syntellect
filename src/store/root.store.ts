import React from 'react';
import { FirstTaskStore } from './firstTask.store';
import { SecondTaskStore } from './secondTask.store';
import { ThirdTaskStore } from './thirdTask.store';

export class RootStore {
	public firstTaskStore: FirstTaskStore;
	public secondTaskStore: SecondTaskStore;
	public thirdTaskStore: ThirdTaskStore;
	constructor() {
		this.firstTaskStore = new FirstTaskStore(this);
		this.secondTaskStore = new SecondTaskStore(this);
		this.thirdTaskStore = new ThirdTaskStore(this);
	}
}

const RootStoreContext = React.createContext(new RootStore());

export const useStore = () => React.useContext(RootStoreContext);
