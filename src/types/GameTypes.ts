export type DifficultyLevel = "easy" | "medium" | "hard";

export type Notification = { notificationMsg: string; isError: boolean };

export interface GameState {
  difficulty: DifficultyLevel;
  grid: string[][];
  selectedWords: string[];
  playerName: string;
  notification: Notification | null;
}

export interface GridCoordinate {
  row: number;
  col: number;
}

export interface Word {
  text: string;
  coordinates: GridCoordinate[];
}

export interface SetGridPayload {
  grid: string[][];
  words: string[];
}

export interface APIError {
  message: string;
  statusCode: number;
}