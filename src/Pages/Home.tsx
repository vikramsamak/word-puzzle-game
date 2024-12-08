import { useDispatch } from "react-redux";
import { setDifficulty, setPlayerName } from "../features/game/GameSlice";
import { Difficulty_Level_Option, DifficultyLevel } from "../types/GameTypes";
import { useNavigate } from "react-router-dom";
import { useGameState } from "../hooks/useAppSelector";
import { FormEvent } from "react";
import useNotification from "../hooks/useNotification";
import { DIFFICULTY_LEVELS_OPTIONS } from "../constants/Constants";

function Home() {
  const { playerName } = useGameState();
  const showNotification = useNotification();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!playerName.trim()) {
      showNotification({
        isError: true,
        message: "Player name is required.",
      });
    } else {
      navigate("/game");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-center text-3xl font-bold">
            Start Your Word Search Game!
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Player Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Player Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                onChange={(e) => dispatch(setPlayerName(e.target.value))}
              />
            </div>

            {/* Difficulty Selector */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Select Difficulty</span>
              </label>
              <select
                className="select select-bordered"
                onChange={(e) =>
                  dispatch(setDifficulty(e.target.value as DifficultyLevel))
                }
              >
                {DIFFICULTY_LEVELS_OPTIONS.map(
                  (level: Difficulty_Level_Option, index: number) => (
                    <option key={index} value={level.value}>
                      {level.label}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary w-full">
                Start Game
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Home;
