// import { FormState, useForm } from '../../hooks/useForm';
// import FormButton from './FormButton';
// import FormInput from './FormInput';
// import { validateRegister } from './validation';

// interface RegisterFormValues extends FormState {
//   name: string;
//   email: string;
//   password: string;
//   role: string;
// }

// const Register = () => {
//   const { formData, handleChange, handleSubmit, formErrors } =
//     useForm<RegisterFormValues>(
//       {
//         name: '',
//         email: '',
//         password: '',
//         role: '',
//       },
//       validateRegister
//     );

//   const onSubmit = () => {
//     console.log('Datos de registro:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <FormInput
//         label="Nombre de usuario"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         error={formErrors.name}
//       />
//       <FormInput
//         label="Correo"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         error={formErrors.email}
//       />
//       <FormInput
//         label="Contraseña"
//         name="password"
//         type="password"
//         value={formData.password}
//         onChange={handleChange}
//         error={formErrors.password}
//       />
//       <div>
//         <label htmlFor="role">Role:</label>
//         <select name="role" value={formData.role} onChange={handleChange}>
//           <option value="" disabled>
//             Selecciona tu rol
//           </option>
//           <option value="tutor">Soy tutor</option>
//           <option value="student">Soy estudiante</option>
//         </select>
//         {formErrors.role && <p style={{ color: 'red' }}>{formErrors.role}</p>}
//       </div>
//       <FormButton label="Registrarse" />
//     </form>
//   );
// };

// export default Register;

// Register.tsx
import { FormState, useForm } from '../../hooks/useForm';
import FormButton from './FormButton';
import FormInput from './FormInput';
import { validateRegister } from './validation';
import styled from 'styled-components';

interface RegisterFormValues extends FormState {
  name: string;
  email: string;
  password: string;
  role: string;
}

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #f9f9f9;
  // border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const Register = () => {
  const { formData, handleChange, handleSubmit, formErrors } =
    useForm<RegisterFormValues>(
      {
        name: '',
        email: '',
        password: '',
        role: '',
      },
      validateRegister
    );

  const onSubmit = () => {
    console.log('Datos de registro:', formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Nombre de usuario"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={formErrors.name}
      />
      <FormInput
        label="Correo"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
      />
      <FormInput
        label="Contraseña"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={formErrors.password}
      />
      <SelectContainer>
        <SelectLabel htmlFor="role">Rol:</SelectLabel>
        <Select name="role" value={formData.role} onChange={handleChange}>
          <option value="" disabled>
            Selecciona tu rol
          </option>
          <option value="tutor">Soy tutor</option>
          <option value="student">Soy estudiante</option>
        </Select>
        {formErrors.role && <ErrorText>{formErrors.role}</ErrorText>}
      </SelectContainer>
      <FormButton label="Registrarse" />
    </FormContainer>
  );
};

export default Register;
