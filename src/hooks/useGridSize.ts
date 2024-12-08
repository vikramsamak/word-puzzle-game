import { useDispatch } from "react-redux";
import { setGridSize } from "../features/game/GameSlice";
import { EASY_LEVEL, MEDIUM_LEVEL, HARD_LEVEL } from "../constants/Constants";

export const useGridSize = (difficulty: string) => {
  const dispatch = useDispatch();

  switch (difficulty) {
    case EASY_LEVEL:
      dispatch(setGridSize(6));
      break;
    case MEDIUM_LEVEL:
      dispatch(setGridSize(8));
      break;
    case HARD_LEVEL:
      dispatch(setGridSize(10));
      break;
    default:
      dispatch(setGridSize(6));
  }

  const gridSize =
    difficulty === EASY_LEVEL
      ? 6
      : difficulty === MEDIUM_LEVEL
      ? 8
      : difficulty === HARD_LEVEL
      ? 10
      : 6;

  const grid = Array.from({ length: gridSize }, () =>
    Array(gridSize).fill(null)
  );

  return grid;
};
