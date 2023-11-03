import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { name, place } = action.payload;
      state.name = name;
      state.place = place;
    },
    logout: (state) => {
      state.name = undefined;
      state.place = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
