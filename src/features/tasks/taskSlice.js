import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_TASKS } from '../../app/data';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    entities: INITIAL_TASKS,
  },
  reducers: {
    something: (state, action) => {
      // Use action.payload to change state
    }
  },
});

export const { something } = taskSlice.actions;

export default taskSlice.reducer;
