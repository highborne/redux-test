import { createSlice } from '@reduxjs/toolkit';
import { IItens } from 'types/categorias';
import { itens } from 'utils/mocks/itensMocks';

const initialState: IItens[] = itens;

const itensSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    increment: (state) => {
      state.push({} as IItens);
    },
    decrement: (state) => {
      state.pop();
    },
  },
});

export const { increment, decrement } = itensSlice.actions;

export default itensSlice.reducer;
