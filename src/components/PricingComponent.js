import React, { useState } from 'react';
import Slider from './Slider';
import ToggleSwitch from './ToggleSwitch';

import styled from 'styled-components';
import { color, font } from '../Styles';
import check from '../images/icon-check.svg';

const PricingComponent = () => {
	const [value, setValue] = useState(50);
    const [toggle, setToggle] = useState(false);
	return (
		<Container>
			<div className='pricing'>
				<h3>{value}K PAGEVIEWS</h3>
				<h1>
					${toggle ? ((value - (value * 0.25)) / 2).toFixed(2) : (value / 2).toFixed(2)}
				</h1>
				<h3>/month</h3>
			</div>
			<Slider setValue={setValue} />
			<div className='billing'>
				<h4>Monthly Billing</h4>
				<ToggleSwitch setToggle={setToggle} />
				<h4>
					Yearly Billing <span>25% discount</span>
				</h4>
			</div>
			<div className='trial'>
				<ul>
					<li>Unlimited websites</li>
					<li>100% data ownership</li>
					<li>Email reports</li>
				</ul>
				<button>Start my trial</button>
			</div>
		</Container>
	);
};

export default PricingComponent;

const Container = styled.div`
	min-height: 50vh;
	width: 40vw;
	border-radius: 10px;
	background-color: hsl(0, 0%, 100%);
	color: ${color.text};
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	.pricing {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 2rem;
		h3:first-child {
			margin-right: 8rem;
			letter-spacing: 2px;
		}
		h1 {
			color: ${color.textCTABackground};
		}
	}
	.billing {
		display: flex;
		justify-content: center;
		margin: 4rem 0 2rem;
		h4:first-child {
			margin-left: 5rem;
		}
		h4 {
			font-size: ${font.size};
		}
		span {
			margin-left: 5px;
			padding: 2px 8px;
			border-radius: 10px;
			background-color: ${color.discountBackground};
			color: ${color.discountText};
		}
	}
	.trial {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 40%;
		font-size: ${font.size};
		border-top: 1px solid ${color.emptySliderBar};
		ul {
			list-style-image: url(${check});
			user-select: none;
			li {
				margin-top: 7px;
			}
		}
		button {
			height: 2.5rem;
			width: 10rem;
			border-radius: 20px;
			border: none;
			color: ${color.ctaText};
			background-color: ${color.textCTABackground};
			cursor: pointer;
		}
	}
`;
