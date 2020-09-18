// store/configureStore.js

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counter from './counter';

export const wrapper = createWrapper(() =>
  configureStore({
    reducer: {
      counter,
    },
    devTools: true,
  })
);
