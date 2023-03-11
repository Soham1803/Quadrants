import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Box, Button, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ModelCustomizationProvider } from './contexts/ModelCustomizationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const colors = {
  background: {
    color: "#637BA9",
    gradient: "radial-gradient(50% 50% at 50% 50%, rgba(255, 0, 214, 0.2) 0%, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0.2) 0.01%, rgba(72, 0, 116, 0.2) 100%), #637BA9",
  },
};

const theme = extendTheme({
  colors: {
    brand: {
      background: {
        color: "#637BA9",
        gradient: "radial-gradient(50% 50% at 50% 50%, rgba(255, 0, 214, 0.2) 0%, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0.2) 0.01%, rgba(72, 0, 116, 0.2) 100%), #637BA9",
      },
    }
    // add more colors here
  },
  // add more theme customization options here
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <ModelCustomizationProvider>
        <App />
      </ModelCustomizationProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
