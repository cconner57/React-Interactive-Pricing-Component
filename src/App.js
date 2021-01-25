import GlobalStyles from './GlobalStyles';
import Heading from './components/Heading';
import PricingComponent from './components/PricingComponent';

import styled from 'styled-components';
import pattern from './images/bg-pattern.svg';

function App() {
	return (
		<AppContainer>
			<GlobalStyles />
			<Heading />
			<PricingComponent />
		</AppContainer>
	);
}

export default App;

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
  justify-content: center;
  align-items: center;
	width: 100vw;
	height: 100vh;
	background: url(${pattern}) no-repeat top;
`;
