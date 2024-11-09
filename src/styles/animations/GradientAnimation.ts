import { keyframes } from 'styled-components';

const GradientAnimation = keyframes`
	0% {
		background-position: 0% 0%;
	}
	50% {
		background-position: 300% 150%;
	}
	100% {
		background-position: 600% 300%;
	}
`;

export default GradientAnimation;
