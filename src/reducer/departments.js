import * as actionTypes from '../actions/ActionTypes'

const departments = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_DEPARTMENT:
      return {...state, [action.department.id]: action.department}      
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
