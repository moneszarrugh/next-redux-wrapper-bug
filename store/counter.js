// store/counter.js

import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const slice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (counter, action) => {
      counter.count += action.payload;
    },
    decrement: (counter, action) => {
      counter.count -= action.payload;
    },
    setCount: (counter, action) => {
      counter.count = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (counter, action) => {
      console.log('HYDRATE...');
      counter.count = action.payload.counter.count;
    },
  },
});

export default slice.reducer;

export const { increment, decrement, setCount } = slice.actions;

export const selectCount = state => state.counter.count;
