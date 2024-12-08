import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCorrectWords, setLetters } from "../features/game/GameSlice";
import { getRandomWords } from "../utils/api";
import { shuffleArray } from "../utils/shuffleArray";

export const useFetchWords = (gridSize: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const randomWords = await getRandomWords(gridSize);

        dispatch(setCorrectWords(randomWords));

        const allLetters = randomWords.join("").split("");

        const shuffled = shuffleArray([...allLetters]);
        dispatch(setLetters(shuffled));
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };

    fetchWords();
  }, [dispatch, gridSize]); // Re-run whenever gridSize changes
};
