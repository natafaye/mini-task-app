import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_TASKS } from '../../app/data';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    entities: INITIAL_TASKS,
  },
  reducers: {
    deleteTask: (state, action) => {
      const indexToRemove = state.entities.findIndex((task) => task.id === action.payload);
      state.entities.splice(indexToRemove, 1);
    }
  },
});

export const { deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
