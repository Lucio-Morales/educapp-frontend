import { FormErrors } from '../../hooks/useForm';

export const validateLogin = (values: {
  email: string;
  password: string;
}): FormErrors => {
  const errors: FormErrors = {};
  if (!values.email) errors.email = 'El email es obligatorio';
  if (!values.password) errors.password = 'La contraseña es obligatoria';
  return errors;
};

export const validateRegister = (values: {
  name: string;
  email: string;
  password: string;
  role: string;
}): FormErrors => {
  const errors: { [key: string]: string } = {};
  if (!values.name) errors.name = 'Ingrese su nombre.';
  if (!values.email) errors.email = 'Ingrese un email.';
  if (!values.password) errors.password = 'Ingrese una contraseña.';
  if (!values.role) errors.role = 'Ingrese su rol.';
  return errors;
};
