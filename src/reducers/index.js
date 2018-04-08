import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as oidcReducer } from 'redux-oidc';
import PostReducer from './reducer_posts';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
  user: UserReducer,
  oidc: oidcReducer,
  posts: PostReducer,
  form: formReducer
});

export default rootReducer;
