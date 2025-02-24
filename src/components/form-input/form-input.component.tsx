import { FunctionComponent, InputHTMLAttributes } from 'react';

import { FormInputLabel, Group, Input } from './form-input.styles';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput: FunctionComponent<FormInputProps> = ({ label, ...inputOptions }) => {
  const hasValue: boolean = Boolean(
    inputOptions.value && typeof inputOptions.value === 'string' && inputOptions.value.length,
  );

  return (
    <Group>
      <Input {...inputOptions} />
      {label && <FormInputLabel shrink={hasValue}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
