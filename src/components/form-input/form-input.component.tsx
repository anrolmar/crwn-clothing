import { FunctionComponent, InputHTMLAttributes } from 'react';

import { FormInputLabel, Group, Input } from './form-input.styles';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput: FunctionComponent<FormInputProps> = ({ label, ...inputOptions }) => {
  const inputValue: string | undefined = inputOptions.value?.toString();
  const hasValue: boolean = inputValue ? inputValue.length > 0 : false;

  return (
    <Group>
      <Input {...inputOptions} />
      {label && <FormInputLabel shrink={hasValue}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
