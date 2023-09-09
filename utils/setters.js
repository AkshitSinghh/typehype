import data from "./english.json";

export const totalWords = 60;
export const totalTime = 15;

export const fetchData = async (setDatabase) => {
  setDatabase(data.words);
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

export const setColor = (color, classValue, counter) => {
  let updatedClassValue = [...classValue];
  updatedClassValue[counter] = color;

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
  if (data[counter] == " " && input != data[counter]) {
    setClassValue(setColor("space-error", classValue, counter));
  } else if (input?.toLowerCase() == data[counter]?.toLowerCase()) {
    setCorrectCount(correctCount + 1);
    setClassValue(setColor("correct", classValue, counter));
  } else {
    setClassValue(setColor("incorrect", classValue, counter));
  }
};
