import axios from 'axios';
import { invokeApi } from '../aws/api_gateway';
export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAILURE = 'login_failure';
export const LOG_OUT = 'log_out';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      accessKeyId: data.accessKeyId,
      secretAccessKey: data.secretAccessKey,
      sessionToken: data.sessionToken
    }
  }
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    }
}

export function logOut() {
    return {
        type: LOG_OUT
    }
}

export function fetchPosts(user) {
  // user, params, pathTemplate, method, additionalParams, body
  const request = invokeApi(user, {}, '/posts', 'GET', {}, {});

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(user, values, callback) {
  const request = invokeApi(user, {}, '/posts', 'POST', {}, values).then(
    () => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(user, id) {
  // user, params, pathTemplate, method, additionalParams, body
  const request = invokeApi(user, {'id': id}, '/posts/{id}', 'GET', {}, {});

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(user, id, callback) {
  // user, params, pathTemplate, method, additionalParams, body
  const request = invokeApi(user, {'id': id}, '/posts/{id}', 'DELETE', {}, {}).then(
    () => callback());

  return {
    type: DELETE_POST,
    payload: request
  }
}
