import * as actionTypes from '../actions/ActionTypes'
import omit from 'lodash/omit'

const employees = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      return {...state, [action.employee.id]: action.employee}
    case actionTypes.CHANGE_EMPLOYEE:
      return {...state, [action.id]: action.employee}
    case actionTypes.DELETE_EMPLOYEE:
      return omit(state, action.id)
      case actionTypes.LOAD_STATE:
        return action.state.employees || state
    default:
      return state
  }
}

export default employees

/*
 Selectors
*/
export const getEmployees = state => state
