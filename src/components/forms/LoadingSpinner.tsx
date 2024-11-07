import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  align-items: center;
  transform: translate(-50%, -50%);
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = () => (
  <SpinnerContainer>
    <Spinner />
  </SpinnerContainer>
);

export default LoadingSpinner;
