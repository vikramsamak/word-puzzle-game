import { useGameState } from "../hooks/useAppSelector";

interface LettersGridProps {
  grid: (null | unknown)[][];
  handleLetterClick: (letter: string, index: number) => void;
}

function LettersGrid({ grid, handleLetterClick }: LettersGridProps) {
  const { gridSize, letters, selectedIndexes } = useGameState();
  return (
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
  );
}

export default LettersGrid;
