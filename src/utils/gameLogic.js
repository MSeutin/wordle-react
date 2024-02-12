// game logic
import usableWords from "../data/usableWords";

export function getRandomWord() {
  return usableWords[Math.floor(Math.random() * usableWords.length)];
}

export function getGuessArea() {
  let board = Array.from({ length: 6 }, () =>
    Array.from({ length: 5 }, () => ({
      letter: "",
      backgroundColor: "white",
    }))
  );
  return board;
}

export function getVirtualKeyboard() {
  const keyRowTop = [
    { letter: "Q", bgcolor: "aliceblue" },
    { letter: "W", bgcolor: "aliceblue" },
    { letter: "E", bgcolor: "aliceblue" },
    { letter: "R", bgcolor: "aliceblue" },
    { letter: "T", bgcolor: "aliceblue" },
    { letter: "Y", bgcolor: "aliceblue" },
    { letter: "U", bgcolor: "aliceblue" },
    { letter: "I", bgcolor: "aliceblue" },
    { letter: "O", bgcolor: "aliceblue" },
    { letter: "P", bgcolor: "aliceblue" },
  ];
  const keyRowMiddle = [
    { letter: "A", bgcolor: "aliceblue" },
    { letter: "S", bgcolor: "aliceblue" },
    { letter: "D", bgcolor: "aliceblue" },
    { letter: "F", bgcolor: "aliceblue" },
    { letter: "G", bgcolor: "aliceblue" },
    { letter: "H", bgcolor: "aliceblue" },
    { letter: "J", bgcolor: "aliceblue" },
    { letter: "K", bgcolor: "aliceblue" },
    { letter: "L", bgcolor: "aliceblue" },
  ];
  const keyRowBottom = [
    { letter: "ENTER", bgcolor: "aliceblue" },
    { letter: "Z", bgcolor: "aliceblue" },
    { letter: "X", bgcolor: "aliceblue" },
    { letter: "C", bgcolor: "aliceblue" },
    { letter: "V", bgcolor: "aliceblue" },
    { letter: "B", bgcolor: "aliceblue" },
    { letter: "N", bgcolor: "aliceblue" },
    { letter: "M", bgcolor: "aliceblue" },
    { letter: "Del", bgcolor: "aliceblue" },
  ];
  const keyboard = [keyRowTop, keyRowMiddle, keyRowBottom];
  return keyboard;
}
