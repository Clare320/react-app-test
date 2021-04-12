import { useState } from 'react';
import  VConsole from 'vconsole';
import JSToNative from './utils/JSToNative';
import NativeToJS from './utils/NativeToJS';
import TabController from './tab-controller';

import './App.css';

let vConsole;

(function () {
	if (!vConsole) {
		vConsole = new VConsole();
	}
})();


function App() {
	const url  = 'sl://lingjie.com/test?name=lj&age=18';

	const [loginResult, setLoginResult] = useState('');

	const onFuncButtonClick = () => {
		console.log('---->click test');
		JSToNative.postMessage('test', 'hello');
	};

	const onSchemeClick = () => {
		window.location.href = url;
	}

	const onLoginClick = () => {
		window.jsAction('login', { name: 'llj', pwd: '110' }, (res) => {
			console.log('login res=====>', res);
			setLoginResult(res);
		});
	}


	return (
		<div className='container'>
			<div className='gridContainer'>
				<div className='box1'>1</div>
				<div className='box1'>2</div>
				<div className='box1'>3</div>
				<div className='box1'>4</div>
				<div className='box1'>5</div>
				<div className='box1'>6</div>
			</div>
			<div className='button' onClick={onFuncButtonClick}>post message</div>
			<div 
				className='button'
				onClick={onSchemeClick}
			>send scheme</div>
			<a href={url}>test</a>
			<div className='button' onClick={onLoginClick}>
				login
			</div>
			<span>loginResult: {loginResult}</span>
			<TabController style={{ flex: '1' }}/>
		</div>
	);
}

export default App;
