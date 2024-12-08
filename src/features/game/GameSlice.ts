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
  gridSize: 0,
  letters: [],
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
    setGridSize: (state, action: PayloadAction<number>) => {
      state.gridSize = action.payload;
    },

    setLetters: (state, action: PayloadAction<string[]>) => {
      state.letters = action.payload;
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
  setGridSize,
  resetGame,
  setLetters,
} = gameSlice.actions;
export default gameSlice.reducer;
