import React from 'react';

import styled from 'styled-components';
import { color } from '../Styles';
import slider from '../images/icon-slider.svg'

const Slider = ({setValue}) => {
	return (
		<Container>
			<input type='range' min='1' max='100' onChange={(e) => setValue(e.target.value)}/>
		</Container>
	);
};

export default Slider;

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 0;
	input[type='range'] {
		-webkit-appearance: none;
		border-radius: 10px;
		height: 0.75rem;
		width: 30rem;
		background-color: ${color.fullSliderBar};
	}
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		position: relative;
		z-index: 1;
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 50%;
		background: url(${slider}) center ${color.sliderBackground} no-repeat;
		cursor: pointer;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-ms-track {
		width: 100%;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
`;
