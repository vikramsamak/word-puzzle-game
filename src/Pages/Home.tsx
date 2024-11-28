import { useDispatch } from "react-redux";
import {
  setDifficulty,
  setNotification,
  setPlayerName,
} from "../features/game/GameSlice";
import { DifficultyLevel } from "../types/GameTypes";
import { useNavigate } from "react-router-dom";
import { useGameState } from "../hooks/useAppSelector";
import { FormEvent, useEffect } from "react";
import Toast from "../components/Toast";

function Home() {
  const { playerName, notification } = useGameState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!playerName.trim()) {
      dispatch(
        setNotification({
          isError: true,
          notificationMsg: "Player name is required.",
        })
      );
    } else {
      dispatch(setNotification(null)); // Clear notification
      navigate("/game");
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(setNotification(null)); // Automatically clear toast after 3 seconds
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification, dispatch]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      {notification && (
        <Toast
          isError={notification.isError}
          title={notification.notificationMsg}
        />
      )}
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
                <option value="easy">Easy (6x6 Grid)</option>
                <option value="medium">Medium (8x8 Grid)</option>
                <option value="hard">Hard (10x10 Grid)</option>
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
