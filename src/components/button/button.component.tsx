import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';

import './button.styles.scss';

type ButtonType = 'google-sign-in' | 'inverted';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  children?: ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({ children, buttonType, ...buttonOptions }) => {
  return (
    <button className={`button-container ${buttonType ?? ''}`} {...buttonOptions}>
      {children}
    </button>
  );
};

export default Button;
