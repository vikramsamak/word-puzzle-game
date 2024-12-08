import { useDispatch } from "react-redux";
import { useGameState } from "../hooks/useAppSelector";
import {
  setFoundWords,
  setSelectedIndexes,
  setSelectedLetters,
} from "../features/game/GameSlice";
import Loader from "../components/Loader";
import useNotification from "../hooks/useNotification";
import { useGridSize } from "../hooks/useGridSize";
import { useFetchWords } from "../hooks/useFetchWords";

function Game() {
  const {
    difficulty,
    gridSize,
    letters,
    selectedLetters,
    correctWords,
    selectedIndexes,
    foundWords,
  } = useGameState();

  const dispatch = useDispatch();

  const showNotification = useNotification();

  const grid = useGridSize(difficulty);

  useFetchWords(grid.length);

  const checkForCorrectWord = (currentWord: string) => {
    if (
      correctWords.includes(currentWord) &&
      !foundWords.includes(currentWord)
    ) {
      showNotification({
        isError: false,
        message: `Correct word: ${currentWord}`,
      });
      const newFoundWords = [...foundWords, currentWord];
      dispatch(setFoundWords(newFoundWords));
      dispatch(setSelectedLetters(""));
    }
  };

  const handleLetterClick = (letter: string, index: number) => {
    if (selectedIndexes.includes(index)) {
      const newSelectedIndexes = selectedIndexes.filter(
        (prevIndex) => prevIndex !== index
      );
      dispatch(setSelectedIndexes(newSelectedIndexes));
      const newSelectedWord = selectedLetters.replace(letter, "");
      dispatch(setSelectedLetters(newSelectedWord));
    } else {
      const newSelectedWord = selectedLetters + letter;
      const newSelectedIndexes = [...selectedIndexes, index];
      dispatch(setSelectedIndexes(newSelectedIndexes));
      setSelectedLetters(newSelectedWord);
      checkForCorrectWord(newSelectedWord);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="card w-full max-w-3xl shadow-2xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Word Search Game
        </h2>

        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-white">Find the Words:</h3>
          <div className="flex gap-2 justify-center items-center text-white mt-2">
            {correctWords.map((word) => (
              <span
                key={word}
                className={`${
                  foundWords.includes(word) ? "line-through text-green-300" : ""
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {letters.length > 0 && gridSize > 0 ? (
          <div
            className={`grid gap-2 ${
              gridSize === 6
                ? "grid-cols-6"
                : gridSize === 8
                ? "grid-cols-8"
                : "grid-cols-10"
            }`}
          >
            {grid.map((row, rowIndex) =>
              row.map((_, colIndex) => {
                const letterIndex = rowIndex * gridSize + colIndex;
                const letter = letters[letterIndex] || "A"; // Use letter from state or placeholder
                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    onClick={() => {
                      handleLetterClick(letter, letterIndex);
                    }}
                    className={`flex justify-center items-center h-16 border-2 rounded transition-all transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-500 hover:text-white hover:shadow-lg ${
                      selectedIndexes.includes(letterIndex)
                        ? "bg-purple-500 text-white"
                        : "bg-gray-800 text-white"
                    }`}
                  >
                    <span className="text-xl font-semibold transition-all duration-300 ease-in-out">
                      {letter}
                    </span>
                  </div>
                );
              })
            )}
          </div>
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
