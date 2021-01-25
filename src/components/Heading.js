import React from 'react';

import styled from 'styled-components';
import { color } from '../Styles';
import circles from '../images/pattern-circles.svg';

const Heading = () => {
	return (
		<Header>
			<h1> Simple, traffic-based pricing</h1>
			<h2>Sign-up for our 30-day trial. No credit card required.</h2>
		</Header>
	);
};

export default Heading;

const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	height: 9.5rem;
	margin-bottom: 3rem;
	background: url(${circles}) no-repeat top;
	h1 {
		color: ${color.textCTABackground};
		font-size: 1.8rem;
		margin-bottom: .5rem;
	}
	h2 {
		color: ${color.text};
		font-size: .9rem;
	}
`;
