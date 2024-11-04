import { FormState, useForm } from '../../hooks/useForm';
import FormButton from './FormButton';
import FormInput from './FormInput';
import { validateRegister } from './validation';

interface RegisterFormValues extends FormState {
  name: string;
  email: string;
  password: string;
  role: string;
}

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
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <div>
        <label htmlFor="role">Role:</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="" disabled>
            Selecciona tu rol
          </option>
          <option value="tutor">Soy tutor</option>
          <option value="student">Soy estudiante</option>
        </select>
        {formErrors.role && <p style={{ color: 'red' }}>{formErrors.role}</p>}
      </div>
      <FormButton label="Registrarse" />
    </form>
  );
};

export default Register;
