import { useGameState } from "../hooks/useAppSelector";

function GameCardHeader() {
  const { correctWords, foundWords } = useGameState();
  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">Word Search Game</h2>

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
    </>
  );
}

export default GameCardHeader;
