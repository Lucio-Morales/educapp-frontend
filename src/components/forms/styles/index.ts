import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #f9f9f9;
  min-height: 430px;
  height: 440px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectLabel = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #888;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

export { FormContainer, SelectContainer, SelectLabel, Select, ErrorText };
