import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DifficultyLevel,
  GameState,
  Notification,
} from "../../types/GameTypes";

const initialState: GameState = {
  difficulty: "easy",
  grid: [],
  selectedWords: [],
  playerName: "",
  notification: {
    notificationMsg: "",
    isError: false,
  },
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setDifficulty: (state, action: PayloadAction<DifficultyLevel>) => {
      state.difficulty = action.payload;
    },
    setGrid: (state, action: PayloadAction<string[][]>) => {
      state.grid = action.payload;
    },
    addSelectedWord: (state, action: PayloadAction<string>) => {
      state.selectedWords.push(action.payload);
    },
    setPlayerName: (state, action: PayloadAction<string>) => {
      state.playerName = action.payload;
    },
    setNotification: (state, action: PayloadAction<Notification | null>) => {
      state.notification = action.payload;
    },
    resetGame: () => initialState,
  },
});

export const {
  setDifficulty,
  setGrid,
  addSelectedWord,
  setPlayerName,
  setNotification,
  resetGame,
} = gameSlice.actions;
export default gameSlice.reducer;
