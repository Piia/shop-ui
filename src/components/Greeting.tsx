
import React, { FC } from 'react';
import { useReactOidc } from '@axa-fr/react-oidc-context';

const Greeting: FC<{}> = () => {
  const { oidcUser } = useReactOidc();
  const { profile } = oidcUser;

  return (
    <div>
      <h1>Greeting</h1>
      <span>
        Hello {profile.given_name} {profile.family_name}
      </span>
    </div>
  );
};

export default Greeting;
