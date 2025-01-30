import { FunctionComponent } from 'react';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import './authentication.styles.scss';

const Authentication: FunctionComponent = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
