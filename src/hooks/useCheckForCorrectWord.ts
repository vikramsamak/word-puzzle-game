import { useDispatch } from "react-redux";
import { setFoundWords, setSelectedLetters } from "../features/game/GameSlice";
import { useGameState } from "./useAppSelector";
import useNotification from "./useNotification";

export const useCheckForCorrectWord = () => {
  const dispatch = useDispatch();
  const showNotification = useNotification();
  const { correctWords, foundWords } = useGameState();

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

  return { checkForCorrectWord };
};
