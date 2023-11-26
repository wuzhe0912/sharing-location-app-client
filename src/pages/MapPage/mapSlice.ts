import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myLocation: null,
  onlineUsers: [],
  cardChosenOption: null,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMyLocation: (state, action) => {
      state.myLocation = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    setCardChosenOption: (state, action) => {
      state.cardChosenOption = action.payload;
    },
  },
});

export const { setMyLocation, setOnlineUsers, setCardChosenOption } =
  mapSlice.actions;
export default mapSlice.reducer;
