import {combineReducers} from 'redux'
import departments, * as fromDepartments from './departments'
import employees, * as fromEmployees from './employees'

const rootReducer = combineReducers({
  departments,
  employees
})

export default rootReducer

Object.keys(fromDepartments).forEach(key => {
  if (key === 'default')     return
  module.exports[key] = state => fromDepartments[key](state.departments)
})

Object.keys(fromEmployees).forEach(key => {
  if (key === 'default')     return
  module.exports[key] = state => fromEmployees[key](state.employees)
})
