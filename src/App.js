import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const clientId = '389972922963-uvrfcbdgloqotcafj4dtk6uregdrv62j.apps.googleusercontent.com';

function App() {
  const handleSuccess = (credentialResponse) => {
    console.log('Credential response:', credentialResponse);
    alert('Login Success! Check the console.');
  };

  const handleError = () => {
    console.error('Login Failed');
    alert('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
