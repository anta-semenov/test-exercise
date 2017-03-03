import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import * as actionTypes from '../actions/ActionTypes'
import {get, create, update, deleteDb} from '../api'

export default function* rootSaga() {
  yield [
    watchLoadState(),
    watchCreateRecord(),
    watchChangeRecord(),
    watchDeleteRecord()
  ]
}

/*
  Watchers
*/
function* watchLoadState() {
  yield takeLatest(actionTypes.LOAD_STATE, loadState)
}

function* watchCreateRecord() {
  yield takeEvery(actionTypes.ADD_RECORD, addRecord)
}

function* watchChangeRecord() {
  yield takeEvery(actionTypes.CHANGE_RECORD, changeRecord)
}

function* watchDeleteRecord() {
  yield takeEvery(actionTypes.DELETE_RECORD, deleteRecord)
}


/*
  Side effects
*/
const processEntity = (db, entity) => {
  const result = {}
  if (Array.isArray(db[entity])) {
    db[entity].forEach(item => result[item.id] = item)
  } else if (typeof db[entity] === 'object') {
    return db[entity]
  }
  return result
}

function* loadState() {
  const db = yield call(get, 'db')

  yield put({
    type: actionTypes.SET_STATE,
    state: {
      departments: processEntity(db, 'departments'),
      employees: processEntity(db, 'employees')
    }
  })
}

function* addRecord({recordType, data}) {
  const newData = yield call(create, recordType, data)
  if (recordType === 'departments') {
    yield put({type: actionTypes.ADD_DEPARTMENT, department: newData})
  } else {
    yield put({type: actionTypes.ADD_EMPLOYEE, employee: newData})
  }
}

function* changeRecord({recordType, id, data}) {
  const newData = yield call(update, recordType, id, data)
  if (recordType === 'departments') {
    yield put({type: actionTypes.CHANGE_DEPARTMENT, id, department: newData})
  } else {
    yield put({type: actionTypes.CHANGE_EMPLOYEE, id, employee: newData})
  }
}

function* deleteRecord({recordType, id}) {
  try {
    yield call(deleteDb, recordType, id)
    if (recordType === 'departments') {
      yield put({type: actionTypes.DELETE_DEPARTMENT, id})
    } else {
      yield put({type: actionTypes.DELETE_EMPLOYEE, id})
    }
  } catch (e) {
    //
  }
}
