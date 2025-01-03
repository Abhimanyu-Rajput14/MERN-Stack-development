import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { Fragment } from 'react'

const App = () => {
  return (
    <Fragment>
      <div>
        <Header />
        <Main />
      </div>
    </Fragment>
  )
}

export default App