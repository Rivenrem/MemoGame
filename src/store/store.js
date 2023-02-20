import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardsSlice";
import movesReducer from "./movesSlice";

export default configureStore({
  reducer: {
    cards: cardsReducer,
    moves: movesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
