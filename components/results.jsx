import { useEffect, useState } from "react";
import { totalTime } from "../utils/setters";

const Results = ({ correctCount, totalCount }) => {
  const [error, setError] = useState(0);
  const [wordsPerMin, setWordsPerMin] = useState(0);

  useEffect(() => {
    let timeInMin = totalTime / 60;
    let currentWordsPerMin = correctCount / 4 / timeInMin / 2;
    let error = ((totalCount - correctCount) / totalCount) * 100;

    setWordsPerMin(currentWordsPerMin);
    setError(Math.ceil(error));
  }, [totalCount]);
  return (
    <div className="results-container">
      <span className="words-per-min">
        <span>{wordsPerMin}</span>
        <span className="description"> WPM</span>
      </span>
      <span className="error">
        <span> {error}% </span>
        <span className="description"> Error</span>
      </span>
    </div>
  );
};

export default Results;
