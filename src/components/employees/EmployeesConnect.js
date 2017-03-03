import {connect} from 'react-redux'
import Employees from './Employees'
import values from 'lodash/values'
import * as actionTypes from '../../actions/ActionTypes'
import * as fromReducer from '../../reducer'

const mapStateToProps = state => ({
  employees: fromReducer.getEmployees(state),
  departments: values(fromReducer.getDepartments(state))
})

const mapDispatchToProps = dispatch => ({
  addEmployee: () => dispatch({
    type: actionTypes.ADD_RECORD,
    recordType: 'employees',
    data: {firstName: '', lastName: '', departmentId: ''}
  }),
  deleteEmployee: id => dispatch({
    type: actionTypes.DELETE_RECORD,
    recordType: 'employees',
    id
  }),
  changeEmployee: (id, key, value, data) => dispatch({
    type: actionTypes.CHANGE_RECORD,
    recordType: 'employees',
    id,
    data: {...data, [key]: value}
  })
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  departments: stateProps.departments,
  addEmployee: dispatchProps.addEmployee,
  employees: Object.keys(stateProps.employees).map(id => {
    const employee = stateProps.employees[id]
    const {changeEmployee} = dispatchProps

    return ({
      ...employee,
      id,
      deleteEmployee: () => dispatchProps.deleteEmployee(id),
      onFirstNameChange: value => changeEmployee(id, 'firstName', value, employee),
      onLastNameChange: value => changeEmployee(id, 'lastName', value, employee),
      onDepartmentChange: value => changeEmployee(id, 'departmentId', value, employee)
    })
  })
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Employees)
