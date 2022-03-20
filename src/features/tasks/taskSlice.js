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
    },
    addTask: (state, action) => {
      const task = { ...action.payload, id: state.entities[state.entities.length-1].id + 1 };
      state.entities.push(task);
    }
  },
});

export const { deleteTask, addTask } = taskSlice.actions;

export default taskSlice.reducer;
