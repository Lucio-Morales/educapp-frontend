interface FormButtonProps {
  label: string;
  onClick?: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({ label, onClick }) => (
  <button type="submit" onClick={onClick}>
    {label}
  </button>
);

export default FormButton;
