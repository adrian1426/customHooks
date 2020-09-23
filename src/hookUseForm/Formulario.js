import React from 'react';
import useForm from './useForm';

const intialValues = {
  email: 'email',
  password: 'password',
  isOk: false,
  gender: 'female',
  sel: '2'
};

const Formulario = () => {

  const form = useForm(intialValues);

  console.log(form);

  return (
    <div>
      <form >
        <span>Email</span>
        <br />
        <input type="email" {...form.newPropsInput('email')} autoComplete="username" />
        <br />

        <span>Password</span>
        <br />
        <input type="password" {...form.newPropsInput('password')} autoComplete="current-password" />
        <br />

        <input type="checkbox" {...form.newPropsCheckBox('isOk')} />
        <span>is ok?</span>
        <br />

        <input type="radio" {...form.newPropsRadioButton('gender', 'female')} />
        <span>Female</span>
        <br />

        <input type="radio" {...form.newPropsRadioButton('gender', 'male')} />
        <span>Male</span>
        <br />

        <select {...form.newPropsSelect('sel')}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>
    </div>
  );
};

export default Formulario;