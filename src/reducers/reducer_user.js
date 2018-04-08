import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT
} from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
        return Object.assign({}, state, {
          accessKeyId: action.payload.accessKeyId,
          secretAccessKey: action.payload.secretAccessKey,
          sessionToken: action.payload.sessionToken,
          loggedIn: true
        })
    case LOGIN_FAILURE:
        return Object.assign({}, state, {
          accessKeyId: '',
          secretAccessKey: '',
          sessionToken: '',
          loggedIn: false
        })
    case LOG_OUT:
        return Object.assign({}, state, {
          accessKeyId: '',
          secretAccessKey: '',
          sessionToken: '',
          loggedIn: false
        })
    default:
      return state
  }
}
