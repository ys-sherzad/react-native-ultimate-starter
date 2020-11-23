'use strict';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// service
import DummyService from '../api/dummyAPI';
// types
import { AppThunk } from '../store';
import { User, UsersState } from '../types';

// set the initial state
const initialState: UsersState = {
    users: [],
    inProgress: false,
    error: null
}

// create "users" slice reducer and its creator actions
const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers(state) {
            state.inProgress = true;
            state.error = null;
        },
        getUsersSuccess(state, action: PayloadAction<{ users: User[] }>) {
            const { users } = action.payload;
            state.inProgress = false;
            state.users = users;
        },
        getUsersFailure(state, action: PayloadAction<string>) {
            state.inProgress = false;
            state.error = action.payload;
        }
    }
});

export const {
    getUsers,
    getUsersSuccess,
    getUsersFailure
} = users.actions;

export default users.reducer;

// fetch users from a remote server
export const fetchUsers = (): AppThunk => async dispatch => {
    try {
        dispatch(getUsers());
        const users = await DummyService.getUsers();
        dispatch(getUsersSuccess({ users }))
    } catch (ex) {
        dispatch(getUsersFailure('error:' + ex))
    }
}