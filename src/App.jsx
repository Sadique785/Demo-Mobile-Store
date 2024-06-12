import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'

function App() {

  return (
  <Fragment>
    <Header/>
    <ProductList/>

  </Fragment>
  )
}

export default App
