'use strict';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// service
import FakeService from '../api/fakeAPI';
// types
import { AppThunk } from '../store';
import { User, UsersState } from '../types';

const initialState: UsersState = {
    users: [],
    inProgress: false,
    error: null
}

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
            state.users = users;
            state.inProgress = false;
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

export const fetchUsers = (): AppThunk => async dispatch => {
    try {
        dispatch(getUsers());
        const users = await FakeService.getUsers();
        dispatch(getUsersSuccess({ users }))
    } catch (ex) {
        dispatch(getUsersFailure('error:' + ex))
    }
}