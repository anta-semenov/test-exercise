import {connect} from 'react-redux'
import Departments from './Departments'
import * as actionTypes from '../../actions/ActionTypes'
import * as fromReducer from '../../reducer'

const mapStateToProps = state => ({
  departments: fromReducer.getDepartments(state)
})

const mapDispatchToProps = dispatch => ({
  addDepartment: () => dispatch({
    type: actionTypes.ADD_RECORD,
    recordType: 'departments',
    data: {name: ''}
  }),
  changeDepartmentName: (id, name) => dispatch({
    type: actionTypes.CHANGE_RECORD,
    recordType: 'departments',
    id,
    data: {id, name}
  }),
  deleteDeparment: id => dispatch({
    type: actionTypes.DELETE_RECORD,
    recordType: 'departments',
    id
  })
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  departments: Object.keys(stateProps.departments).map(id => ({
    id,
    value: stateProps.departments[id].name,
    onChange: newName => dispatchProps.changeDepartmentName(id, newName),
    deleteDeparment: () => dispatchProps.deleteDeparment(id)
  })),
  addDepartment: dispatchProps.addDepartment
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Departments)
