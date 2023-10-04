import { createSlice } from "@reduxjs/toolkit";

// set initial values for slice
const initialState = {
  menuList: [],
};

// create menu slice
const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    setMenuList: (state, action) => ({
      ...state,
      menuList: action.payload,
    }),
  },
});

// export set methods
export const { setMenuList } = menuSlice.actions;

export default menuSlice.reducer;
