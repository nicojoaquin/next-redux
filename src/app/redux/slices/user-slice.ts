import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
  password: string;
}

export interface UserSliceState {
  user: UserState | null;
}

const initialState: UserSliceState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
