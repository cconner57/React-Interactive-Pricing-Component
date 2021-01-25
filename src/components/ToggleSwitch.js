import React from 'react';

import styled from 'styled-components';
import { color } from '../Styles';

const ToggleSwitch = ({ setToggle }) => {
	return (
		<Container>
			<label className='switch'>
				<input type='checkbox' onClick={(e) => setToggle(e.target.checked)} />
				<span className='slider round'></span>
			</label>
		</Container>
	);
};

export default ToggleSwitch;

const Container = styled.div`
	.switch {
		position: relative;
		display: inline-block;
		width: 55px;
		height: 18px;
		margin: 0 1rem;
	}
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}
	.slider:before {
		position: absolute;
		content: '';
		height: 13px;
		width: 13px;
		left: 6px;
		bottom: 3px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}
	input:checked + .slider {
		background-color: ${color.sliderBackground};
	}
	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}
	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
	.slider.round {
		border-radius: 34px;
		background-color: ${color.toggleBackground};
	}
	.slider.round:before {
		border-radius: 50%;
	}
`;
