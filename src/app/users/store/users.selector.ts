import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from './user';

export const selectUsers = createFeatureSelector<User[]>('users');

export const selectUserById = (userId: number) =>
  createSelector(selectUsers, (users: User[]) => {
    var userById = users.filter((_) => _.id == userId);
    if (userById.length == 0) {
      return null;
    }
    return userById[0];
  });
