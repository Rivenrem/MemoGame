import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: [
    { type: "1", image: require("../images/icecream-07-svgrepo-com.png") },
    { type: "2", image: require("../images/icecream-11-svgrepo-com.png") },
    { type: "3", image: require("../images/icecream-14-svgrepo-com.png") },
    { type: "4", image: require("../images/icecream-15-svgrepo-com.png") },
    { type: "5", image: require("../images/icecream-17-svgrepo-com.png") },
    { type: "6", image: require("../images/icecream-18-svgrepo-com.png") },
    { type: "1", image: require("../images/icecream-07-svgrepo-com.png") },
    { type: "2", image: require("../images/icecream-11-svgrepo-com.png") },
    { type: "3", image: require("../images/icecream-14-svgrepo-com.png") },
    { type: "4", image: require("../images/icecream-15-svgrepo-com.png") },
    { type: "5", image: require("../images/icecream-17-svgrepo-com.png") },
    { type: "6", image: require("../images/icecream-18-svgrepo-com.png") },
  ],
  reducers: {
    shuffleCards: (state) => {
      function swap(state, i, j) {
        const temp = state[i];
        state[i] = state[j];
        state[j] = temp;
      }
      function shuffleCards(arr) {
        const length = arr.length;
        for (let i = length; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * i);
          const currentIndex = i - 1;
          swap(arr, currentIndex, randomIndex);
        }
        return state;
      }
      shuffleCards(state);
    },
  },
});

export default cardsSlice.reducer;
