import { createAction, props } from '@ngrx/store';
import { User } from './user';

export const invokeUsersAPI = createAction(
  '[Users API] Invoke Users Fetch API'
);

export const usersFetchAPISuccess = createAction(
  '[Users API] Fetch API Success',
  props<{ allUsers: User[] }>()
);

export const invokeSaveNewUserAPI = createAction(
  '[Users API] Inovke save new user api',
  props<{ newUser: User }>()
);

export const saveNewUserAPISucess = createAction(
  '[Users API] save new user api success',
  props<{ newUser: User }>()
);

export const invokeUpdateUserAPI = createAction(
  '[Users API] Inovke update user api',
  props<{ updateUser: User }>()
);

export const updateUserAPISucess = createAction(
  '[Users API] update  user api success',
  props<{ updateUser: User }>()
);

export const invokeDeleteUserAPI = createAction(
  '[Users API] Inovke delete user api',
  props<{id:number}>()
);

export const deleteUserAPISuccess = createAction(
  '[Users API] deleted user api success',
  props<{id:number}>()
);
