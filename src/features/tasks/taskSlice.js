import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_TASKS } from '../../app/data';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    entities: INITIAL_TASKS,
  },
  reducers: {
    addTask: (state, action) => {
      const task = { ...action.payload, id: state.entities[state.entities.length-1].id + 1 };
      state.entities.push(task);
    }
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
