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
        },
        addCharacter: (state, action) => {
            state.name += action.payload;
        },
        removeCharacter: (state, action) => {
            const str = state.name.slice(0, action.payload) + state.name.slice(action.payload + 1);
            state.name = str;
        }
    }
})

export const { changeName, addCharacter, removeCharacter } = usernameSlice.actions;

export const selectUsername = (state) => state.username.name;

export default usernameSlice.reducer;
