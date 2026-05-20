import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User, userState } from "./userTypes";

const initialState: userState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    getUser: (state, action: PayloadAction<User>) => {
      state.selectedUser = action.payload;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.users = state.users.map((user) =>
        user._id === action.payload._id ? action.payload : user,
      );
    },
    deleteUsers: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user._id !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },
  },
});

export const {
  getUser,
  setUsers,
  addUser,
  deleteUsers,
  updateUser,
  setLoading,
  setError,
  clearSelectedUser,
} = userSlice.actions;

export default userSlice.reducer;
