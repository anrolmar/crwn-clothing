import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';

import { BaseButton, ButtonSpinner, GoogleSignInButton, InvertedButton } from './button.styles';

type ButtonType = 'base' | 'google-sign-in' | 'inverted';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  children?: ReactNode;
  isLoading?: boolean;
}

const getButton = (buttonType: ButtonType = 'base') => {
  {
    switch (buttonType) {
      case 'base':
        return BaseButton;

      case 'google-sign-in':
        return GoogleSignInButton;

      case 'inverted':
        return InvertedButton;
    }
  }
};

const Button: FunctionComponent<ButtonProps> = ({ children, buttonType, isLoading, ...buttonOptions }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...buttonOptions}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
