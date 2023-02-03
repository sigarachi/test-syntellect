import { FirstTaskModel } from './models/FirstTaskModel';
import { SecondTaskModel } from './models/SecondTaskModel';
import { ThirdTaskModel } from './models/ThirdTaskModel';

function App() {
	return (
		<div className={'App'}>
			<div className={'task-container'}>
				{/*
					Контрол с 2 кнопками справа;
					При нажатии на первую кнопку очищается содерживое в контроле;
					При нажатии на вторую кнопку текст в контроле меняется на 'Hello world!';
					*/}
				<h3>Первое задание</h3>
				<FirstTaskModel />
			</div>
			<div className={'task-container'}>
				{/*
					Контрол с 1 кнопкой справа и 1 кнопкой слева;
					При нажатии на кнопку справа вызывается alert с текстом в контроле;
					При нажатии на кнопку слева проверяем, что в контроле введено число и если это так, то выводим число через alert;
					*/}
				<h3>Второе задание</h3>
				<SecondTaskModel />
			</div>
			<div className={'task-container'}>
				<h3>Третье задание</h3>
				<ThirdTaskModel />
			</div>
		</div>
	);
}

export default App;
