import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home'

export default function RouterSetup() {
  return (
    <div>
        <Router>
            <Route path="/">
                <Home/>
            </Route>
        </Router>
    </div>
  )
}
