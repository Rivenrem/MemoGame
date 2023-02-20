import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const delayedHiddenCards = createAsyncThunk(
  "moves/delayedHiddenCards",
  async function (action) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("foo");
      }, 300);
    });
    return action.payload;
  }
);

export const delayedCleanOpenCards = createAsyncThunk(
  "moves/delayedCleanOpenCards",
  async function (action) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("foo");
      }, 1000);
    });
    return action;
  }
);

export const movesSlice = createSlice({
  name: "moves",
  initialState: {
    count: 0,
    openCards: [],
    hiddenCards: [],
    flippId: [],
  },

  reducers: {
    flippId: (state, action) => {
      state.flippId.push(action.payload);
    },

    increaseCount: (state) => {
      state.count++;
    },

    openCards: (state, action) => {
      state.openCards.push(action.payload);
    },

    restart: (state) => {
      state.count = 0;
      state.openCards = [];
      state.hiddenCards = [];
      state.flippId = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(delayedHiddenCards.fulfilled, (state, action) => {
      state.hiddenCards.push(action.payload);
    });

    builder.addCase(delayedCleanOpenCards.fulfilled, (state) => {
      state.openCards = [];
      state.flippId = [];
    });
  },
});

export default movesSlice.reducer;
