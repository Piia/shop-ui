import React from "react";
import "./App.scss";
import ProductListing from "./containers/ProductListing/ProductListing";

import { BrowserRouter as Router } from 'react-router-dom';
import { AuthenticationProvider, oidcLog, OidcSecure } from '@axa-fr/react-oidc-context';

import oidcConfiguration from './configuration/OidcConfiguration';
import Greeting from "./components/Greeting";


function App() {
  return (
    <AuthenticationProvider
      configuration={oidcConfiguration}
      loggerLevel={oidcLog.DEBUG}
      notAuthenticated={() => <h1>Authenticated!</h1>}
      notAuthorized={() => <h1>Not Authorized!</h1>}
      authenticating={() => <h1>Authenticating</h1>}
      callbackComponentOverride={() => <h1>Callback component</h1>}
      sessionLostComponent={() => <h1>Session lost</h1>}>

      <OidcSecure>
        <div className="App">

          <Router>
            <Greeting />
            <ProductListing />
          </Router>
        </div>
      </OidcSecure>
    </AuthenticationProvider>
  );
}

export default App;
