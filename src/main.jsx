import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import SimpleReactLightbox from '@bimbeo160/simple-react-lightbox';

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
)
