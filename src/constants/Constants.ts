import { Difficulty_Level_Option, DifficultyLevel } from "../types/GameTypes";

export const DIFFICULTY_LEVELS: DifficultyLevel[] = ["easy", "medium", "hard"];

export const DIFFICULTY_LEVELS_OPTIONS: Difficulty_Level_Option[] = [
  { value: "easy", label: "Easy (6x6 Grid)" },
  { value: "medium", label: "Medium (8x8 Grid)" },
  { value: "hard", label: "Hard (10x10 Grid)" },
];
