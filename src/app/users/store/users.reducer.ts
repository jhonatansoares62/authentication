import { createReducer, on } from '@ngrx/store';
import { User } from '../store/user';
import {
  deleteUserAPISuccess,
  saveNewUserAPISucess,
  updateUserAPISucess,
  usersFetchAPISuccess
} from './users.action';

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(usersFetchAPISuccess, (_state, { allUsers }) => {
    return allUsers;
  }),
  on(saveNewUserAPISucess, (state, { newUser: newUser }) => {
    let newState = [...state];
    newState.unshift(newUser);
    return newState;
  }),
  on(updateUserAPISucess, (state, { updateUser }) => {
    let newState = state.filter((_) => _.id != updateUser.id);
    newState.unshift(updateUser);
    return newState;
  }),
  on(deleteUserAPISuccess, (state, { id }) => {
    let newState = state.filter((_) => _.id != id);
    return newState;
  })
);
