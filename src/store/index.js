import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialSelectorState = {
  reactProject: true,
  javaScriptProject: true,
};

const selectorSlice = createSlice({
  name: "Selector",
  initialState: initialSelectorState,
  reducers: {
    reactProjectShow(state) {
      state.reactProject = true;
    },
    reactProjectHide(state) {
      state.reactProject = false;
    },
    javaScriptProjectShow(state) {
      state.javaScriptProject = true;
    },
    javaScriptProjectHide(state) {
      state.javaScriptProject = false;
    },
  },
});

const initialIdState = {
  id: "",
};

const idSlice = createSlice({
  name: "Id",
  initialState: initialIdState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { selector: selectorSlice.reducer, id: idSlice.reducer },
});

export const selectorActions = selectorSlice.actions;
export const idActions = idSlice.actions;

export default store;
