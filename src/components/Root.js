import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import store from '../createStore'
import Departments from './departments/DepartmentsConnect'
import Employees from './employees/EmployeesConnect'
import App from './app/App'

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='departments' component={Departments}/>
        <Route path='employees' component={Employees}/>
      </Route>
    </Router>
  </Provider>
)

export default Root
