import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialSelectorState = {
  reactProject: true,
  javaScriptProject: true,
  outsystemsProject: true,
  seleniumProject: true,
  powerPlatformProject: true,
  awsProject: true,
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
    outsystemsProjectShow(state) {
      state.outsystemsProject = true;
    },
    outsystemsProjectHide(state) {
      state.outsystemsProject = false;
    },
    seleniumProjectShow(state) {
      state.seleniumProject = true;
    },
    seleniumProjectHide(state) {
      state.seleniumProject = false;
    },
    powerPlatformProjectShow(state) {
      state.powerPlatformProject = true;
    },
    powerPlatformProjectHide(state) {
      state.powerPlatformProject = false;
    },
    awsProjectShow(state) {
      state.awsProject = true;
    },
    awsProjectHide(state) {
      state.awsProject = false;
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
