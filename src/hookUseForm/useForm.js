import { useState } from 'react';

const useForm = (initialValues) => {

  const [fields, setFields] = useState(initialValues);

  const addFiled = (name, value) => {
    setFields({
      ...fields,
      [name]: value
    });
  };

  const removeField = name => {
    const newFields = { ...fields };
    delete newFields[name];
    setFields(newFields);
  };

  const onChange = e => {
    const { name, value, type, checked } = e.target;
    setFields({
      ...fields,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const newPropsInput = (name) => ({
    name,
    value: fields[name],
    onChange
  });

  const newPropsCheckBox = (name) => ({
    name,
    checked: fields[name],
    onChange
  });

  const newPropsRadioButton = (name, value) => ({
    name,
    value,
    checked: value === fields[name],
    onChange
  });

  const newPropsSelect = (name) => ({
    name,
    value: fields[name],
    onChange
  });

  return {
    fields,
    newPropsInput,
    newPropsCheckBox,
    newPropsRadioButton,
    newPropsSelect,
    addFiled,
    removeField
  };
};

export default useForm;