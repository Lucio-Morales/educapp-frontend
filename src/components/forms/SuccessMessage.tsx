// SuccessMessage.tsx
import styled from 'styled-components';

// SuccessMessage.tsx
const MessageContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  color: black;
  font-size: 1.2em;
  text-align: center;
`;

const SuccessMessage = ({ message }: { message: string }) => (
  <MessageContainer>
    <p>{message}</p>
  </MessageContainer>
);

export default SuccessMessage;
