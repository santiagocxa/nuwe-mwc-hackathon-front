import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '../../components/Layout'
import Join  from '../../components/Join'
import Register  from '../../components/Register'
import EndProfile  from '../../components/EndProfile'
import CheckProfile  from '../../components/CheckProfile'


function App () {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route exact path='/' component={Join}  />
        <Route exact path='/register' component={Register}  />
        <Route exact path='/end-profile' component={EndProfile}  />
        <Route exact path='/check-profile' component={CheckProfile}  />
      </Switch>
      </Layout>
    </Router>
  )
}

export default App