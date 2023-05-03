import { createSlice } from '@reduxjs/toolkit';
import { ICategoria } from 'types/categorias';
import { categorias } from 'utils/mocks/categoriasMock';

const initialState: ICategoria[] = categorias;

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    increment: (state) => {
      state.push({} as ICategoria);
    },
    decrement: (state) => {
      state.pop();
    },
  },
});

export const { increment, decrement } = categoriasSlice.actions;

export default categoriasSlice.reducer;
