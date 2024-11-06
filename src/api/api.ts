import { LoginFormValues } from '../components/forms/Login';
import { RegisterFormValues } from '../components/forms/Register';

export const registerUser = async (data: RegisterFormValues) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('registerUser data:', data);
};

export const loginUser = async (data: LoginFormValues) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('registerUser data:', data);
};
