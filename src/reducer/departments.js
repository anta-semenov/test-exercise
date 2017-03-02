import * as actionTypes from '../actions/ActionTypes'
import omit from 'lodash/omit'

const departments = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_DEPARTMENT:
      return {...state, [action.department.id]: action.department}
    case actionTypes.CHANGE_DEPARTMENT:
      return {...state, [action.id]: action.department}
    case actionTypes.DELETE_DEPARTMENT:
      return omit(state, action.id)
    case actionTypes.LOAD_STATE:
      return action.state.departments || state
    default:
      return state
  }
}

export default departments

/*
 Selectors
*/
export const getDepartments = state => state
export const getDepartmentName = (state, id) => state[id].name
