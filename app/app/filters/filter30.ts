import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  city: string;
  country: string;
  state: string;
  fullAddress: string;
  minPrice:number | string;
  maxPrice: number | string;
  company: string;
  name: string;
  types: string;
  categories: string;
}

const initialState: FilterState = {
  city: '',
  country: '',
  state: '',
  fullAddress: '',
  minPrice:0,
  maxPrice:1000000000,
  company: '',
  name: '',
  types: '',
  categories: '',
};

const filterSlice30 = createSlice({
  name: 'filter30',
  initialState,
  reducers: {
    updateFilter30: (state, action: PayloadAction<Partial<FilterState>>) => {
      return { ...state, ...action.payload };
    },
    resetFilter30: (state) => {
      return initialState; 
    },
  },
});

export const { updateFilter30, resetFilter30 } = filterSlice30.actions;
export default filterSlice30.reducer;
