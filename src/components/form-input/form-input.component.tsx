import { FunctionComponent, InputHTMLAttributes } from 'react';

import { FormInputLabel, Group, Input } from './form-input.styles';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput: FunctionComponent<FormInputProps> = ({ label, ...inputOptions }) => {
  const hasValue =
    inputOptions.value && typeof inputOptions.value === 'string' ? (inputOptions.value.length > 0).toString() : 'false';

  return (
    <Group>
      <Input {...inputOptions} />
      {label && <FormInputLabel shrink={hasValue}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
