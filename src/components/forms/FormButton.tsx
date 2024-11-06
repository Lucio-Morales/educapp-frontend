import styled from 'styled-components';

interface FormButtonProps {
  label: string;
  onClick?: () => void;
  isPending?: boolean;
}

const StyledButton = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  background-color: #a4c8e1;
  border: 2px solid black;
  // border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7da3c7;
  }
`;

const FormButton: React.FC<FormButtonProps> = ({
  label,
  onClick,
  isPending,
}) => (
  <StyledButton type="submit" disabled={isPending} onClick={onClick}>
    {isPending ? 'Loading...' : label}
  </StyledButton>
);

export default FormButton;
