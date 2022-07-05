import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Derek',
    status: 'Boss'
}

export const usernameSlice = createSlice({
    name: 'username',
    initialState: initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        }
    }
})

export const { changeName } = usernameSlice.actions;

export const selectUsername = (state) => state.username.name;

export default usernameSlice.reducer;
