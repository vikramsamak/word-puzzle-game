// hooks/useHandleLetterClick.ts
import { useDispatch } from "react-redux";
import {
  setSelectedIndexes,
  setSelectedLetters,
} from "../features/game/GameSlice";
import { useGameState } from "../hooks/useAppSelector";
import { useCheckForCorrectWord } from "./useCheckForCorrectWord";

export const useHandleLetterClick = () => {
  const dispatch = useDispatch();
  const { selectedIndexes, selectedLetters } = useGameState();
  const { checkForCorrectWord } = useCheckForCorrectWord();

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
      dispatch(setSelectedLetters(newSelectedWord));

      checkForCorrectWord(newSelectedWord);
    }
  };

  return { handleLetterClick };
};
