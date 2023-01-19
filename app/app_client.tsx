
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { YubiApp } from '../src/YubiApp';

import '../src/style/main.scss';


/*
Browser entrypoint for our app. This module is loaded through a `<script>` tag, and (unlike other modules) is
meant to have side effects. We don't want to export a `run` function here because that would require an inline script,
which we don't want for CSP reasons.
*/

window.addEventListener('DOMContentLoaded', (): void => {
  const mountElement: null | HTMLElement = document.getElementById('app-root');
  
  if (mountElement === null) {
    console.error(`Missing app mount element`);
    return;
  }
  
  ReactDOM.createRoot(mountElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <YubiApp/>
      </BrowserRouter>
    </React.StrictMode>
  );
});
