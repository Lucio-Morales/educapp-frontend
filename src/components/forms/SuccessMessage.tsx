// SuccessMessage.tsx
import styled from 'styled-components';

// SuccessMessage.tsx
const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: black;
  font-size: 1.2em;
  text-align: center;
`;

const SuccessMessage = ({ message }: { message: string }) => (
  <MessageContainer>{message}</MessageContainer>
);

export default SuccessMessage;
