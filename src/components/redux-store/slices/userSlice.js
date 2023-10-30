import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,
        isAuthenticated: false
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
            state.isAuthenticated = true;
        },
        clearUserData: (state) => {
            state.userData = null;
            state.isAuthenticated = false;
        }
    },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
