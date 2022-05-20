import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from '../src/Redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Auth0Provider } from '@auth0/auth0-react'
// import axios from 'axios';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
// axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3000';

import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';


const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

i18next.init({
  interpolation: { escapeValue: false},
  fallbackLng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <Auth0Provider
              domain={domain}
              clientId={clientId}
              redirectUri={window.location.origin}
            >
              <App />
            </Auth0Provider>
          </Provider>
        </PersistGate>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,

  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
