export const totalWords = 45;
export const totalTime = 30;

export const fetchData = async (setDatabase) => {
  const jsonData = await fetch(
    "https://raw.githubusercontent.com/monkeytypegame/monkeytype/master/frontend/static/languages/english_10k.json"
  );
  const database = await jsonData.json();
  setDatabase(database.words);
};

export const setWords = (wordCount, database) => {
  let sentence = "";
  for (let i = 0; i < wordCount; i++) {
    let randomWord = Math.floor(Math.random() * database.length);
    database[randomWord]?.split("").map((element) => {
      sentence += element;
    });

    if (sentence.length) {
      sentence += " ";
    }
  }

  return sentence;
};

export const setColor = (color, classValue, index) => {
  let updatedClassValue = [...classValue];
  updatedClassValue[index] = color;
  return updatedClassValue;
};

export const setInput = (
  input,
  data,
  classValue,
  setClassValue,
  counter,
  setCorrectCount,
  correctCount
) => {
  if (input?.toLowerCase() == data[counter]?.toLowerCase()) {
    setCorrectCount(correctCount + 1);
    setClassValue(setColor("green", classValue, counter));
  } else {
    setClassValue(setColor("red", classValue, counter));
  }
};
