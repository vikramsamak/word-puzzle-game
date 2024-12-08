import { useDispatch } from "react-redux";
import { useGameState } from "../hooks/useAppSelector";
import { setGridSize } from "../features/game/GameSlice";
import { EASY_LEVEL, HARD_LEVEL, MEDIUM_LEVEL } from "../constants/Constants";

function Game() {
  const { difficulty, gridSize } = useGameState();
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

  const grid = Array.from({ length: gridSize }, () =>
    Array(gridSize).fill(null)
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="card w-full max-w-3xl shadow-2xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Word Search Game
        </h2>

        {/* Render the grid */}
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((_, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="flex justify-center items-center h-16 border-2 border-gray-300 rounded"
              >
                <span className="text-xl font-semibold text-gray-700">A</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;
