import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usernameReducer from '../features/username/usernameSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    username: usernameReducer
  },
});
