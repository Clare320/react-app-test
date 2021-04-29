import React, { useState } from 'react'
import JSToNative from '../../utils/JSToNative';
import Modal from '../../pages/TestPortalsPage'
import TestTSPage from '../../pages/TestTSPage'

export default function TestPage() {
    const url = 'sl://lingjie.com/test?name=lj&age=18';

	const [show, setShow] = useState(false);
	const [loginResult, setLoginResult] = useState('');

	const onFuncButtonClick = () => {
		console.log('---->click test');
		JSToNative.postMessage('test', 'hello');
	};

	const onSchemeClick = () => {
		window.location.href = url;
	}

	const onLoginClick = () => {
		window.jsAction('login', { name: 'llj', pwd: '110' }, (res: any) => {
			console.log('login res=====>', res);
			setLoginResult(res);
		});
	}

	const showModal = () => {
		setShow(true);
	};

	const dismissModal = () => {
		setShow(false);
	};

	const renderGrid = (
		<div className='gridContainer'>
			<div className='box1'>1</div>
			<div className='box1'>2</div>
			<div className='box1'>3</div>
			<div className='box1'>4</div>
			<div className='box1'>5</div>
			<div className='box1'>6</div>
		</div>
	);

	const renderModal = (
		<div>
			<div className='button' onClick={showModal}>showModal</div>
		</div>
	);

	const modal = (
		show ?
			(<Modal>
				<div className='modal'>
					This is a modal page.
				<div className='button' onClick={dismissModal}>dismiss modal</div>
				</div>
			</Modal>)
			:
			null
	);

	return (
		<div className='container'>
			{renderModal}
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
			<TestTSPage />
			{modal}
		</div>
	);
}

       