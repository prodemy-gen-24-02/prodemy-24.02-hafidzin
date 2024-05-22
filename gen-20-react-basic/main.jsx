import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Header from './components/Header'
import './index.css'
import Main from './components/home/Main'
import Footer from './components/Footer'
import Equipment from './components/home/Equipment'
import Catalogue from './components/home/Catalogue'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Main />
    <Catalogue /> 
    <Equipment />
    <Footer />
  </React.StrictMode>,
)
