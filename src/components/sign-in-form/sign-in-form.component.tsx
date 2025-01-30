import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';

import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in-form.styles.scss';
import { FirestoreError } from 'firebase/firestore';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm: FunctionComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // Methods
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Event handlers
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch ((error as FirestoreError).code) {
        case 'unauthenticated':
          alert('Email or password are incorrect');
          break;

        case 'not-found':
          alert('No user associated for the credentials');
          break;

        default:
          console.error('Authentication failed', (error as FirestoreError).message);
          break;
      }
    }
  };

  const handleSignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignIn}>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google-sign-in" onClick={handleSignInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
