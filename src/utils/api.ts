const RANDOM_WORD_API_URL = "https://random-word-api.herokuapp.com/word";

export async function getRandomWords(count: number): Promise<string[]> {
  try {
    const response = await fetch(`${RANDOM_WORD_API_URL}?number=${count}`);
    if (!response.ok) {
      throw new Error("Failed to fetch random words.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching random words:", error);
    return ["error"];
  }
}
