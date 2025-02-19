import { FunctionComponent } from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner: FunctionComponent = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  );
};

export default Spinner;
