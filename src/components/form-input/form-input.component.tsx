import { FunctionComponent, InputHTMLAttributes } from 'react';

import './form-input.styles.scss';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput: FunctionComponent<FormInputProps> = ({ label, ...inputOptions }) => {
  const inputValue: string | undefined = inputOptions.value?.toString();

  return (
    <div className="group">
      <input className="form-input" {...inputOptions} />
      {label && <label className={`${inputValue?.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
    </div>
  );
};

export default FormInput;
