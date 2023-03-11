import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Master from './components/Master'
import Student from './components/Student'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here

const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/master" component={Master} />
    <Route exact path="/student" component={Student} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
