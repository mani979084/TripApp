import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Show from './components/Show'
import Add from './components/Add'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <main className='main'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/show' component={Show} />
            <Route exact path='/add' component={Add} />
          </Switch>

        </main>
      </Router>
    </Provider>
  )
}

export default App
