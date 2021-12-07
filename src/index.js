import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { store } from './app/store';
import { apollo_auth_client } from './app/apollo';
//import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import * as serviceWorker from './serviceWorker';
import './i18n';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './app/config/theme';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apollo_auth_client} >
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
