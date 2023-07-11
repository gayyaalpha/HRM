import {createSlice} from '@reduxjs/toolkit';
import { ProductionLine } from '../types/dropdownInfo';

export interface IndustryState {
  productionLine?: ProductionLine;
 
}

const initialState: IndustryState = {
  productionLine:undefined
};

export const JsonSlice = createSlice({
  name: 'JsonSlice',

  initialState,

  reducers: {
    setProductionLine: (state, action) => {
      state.productionLine = action.payload;
    },
  },
});

export const {setProductionLine} = JsonSlice.actions;

export default JsonSlice.reducer;

export const selectProductionLine = (state: any) => state.json?.productionLine;
