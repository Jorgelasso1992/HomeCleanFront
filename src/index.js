import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import Footer from './componentes/footer'

Axios.defaults.baseURL='https://homecleanbackend.herokuapp.com'

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


