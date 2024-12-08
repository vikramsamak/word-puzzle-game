import { useGameState } from "../hooks/useAppSelector";
import { useGridSize } from "../hooks/useGridSize";
import { useFetchWords } from "../hooks/useFetchWords";
import { useHandleLetterClick } from "../hooks/useHandleLetterClick";
import Loader from "../components/Loader";
import GameCardHeader from "../components/GameCardHeader";
import LettersGrid from "../components/LettersGrid";

function Game() {
  const { difficulty, gridSize, letters, selectedLetters } = useGameState();

  const grid = useGridSize(difficulty);

  console.log(grid);

  useFetchWords(grid.length);

  const { handleLetterClick } = useHandleLetterClick();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="card w-full max-w-3xl shadow-2xl bg-base-100 p-6">
        <GameCardHeader />

        {letters.length > 0 && gridSize > 0 ? (
          <LettersGrid
            grid={grid}
            handleLetterClick={(letter: string, index: number) => {
              handleLetterClick(letter, index);
            }}
          />
        ) : (
          <div className="flex w-full h-full justify-center items-center">
            <Loader />
          </div>
        )}

        <div className="mt-4 text-center">
          {selectedLetters.length > 0 && (
            <h3 className="text-lg">Selected Word: {selectedLetters}</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;
