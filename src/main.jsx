import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import QuantGuruWebsite from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1068410141372-e235g3bcs0elb7shtfja3mrqrqlam312.apps.googleusercontent.com">
      <QuantGuruWebsite />
    </GoogleOAuthProvider>
  </React.StrictMode>
);