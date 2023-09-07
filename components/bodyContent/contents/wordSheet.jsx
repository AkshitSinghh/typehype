import Timer from "../../timer";
import { useState, useEffect } from "react";
import { setColor, setInput, totalTime } from "../../../utils/setters";
import { v4 as uuidv4 } from "uuid";
import "../../../styles/index.scss";
import Results from "../../results";
import Reloader from "../reloader";

const WordSheet = ({ data, wordCount, database, setData }) => {
  const [classValue, setClassValue] = useState(
    Array(data.length).fill("letter")
  );
  const [counter, setCounter] = useState(0);
  const [startTimmer, setStartTimer] = useState(false);
  const [showResultPage, setShowResultPage] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [countdownTime, setCountDownTime] = useState(totalTime);

  useEffect(() => {
    setClassValue(Array(data.length).fill("letter"));
    setCounter(0);
    setStartTimer(false);
    setTotalCount(0);
    setCorrectCount(0);
    setCountDownTime(totalTime);
    setShowResultPage(false);
  }, [data]);

  const changeState = (event) => {
    if (
      (event.key >= "a" && event.key <= "z") ||
      event.key === "Backspace" ||
      event.key === " "
    ) {
      setStartTimer(true);
      if (event.key === "Backspace") {
        if (counter > 0) {
          setClassValue(setColor("letter", classValue, counter - 1));
          setCounter(counter - 1);
          setTotalCount(totalCount - 1);
        }
      } else {
        setInput(
          event.key,
          data,
          classValue,
          setClassValue,
          counter,
          setCorrectCount,
          correctCount
        );
        setCounter(counter + 1);
        setTotalCount(totalCount + 1);
      }
    }
  };

  return (
    <div>
      {showResultPage ? (
        <div>
          <Results correctCount={correctCount} totalCount={totalCount} />
        </div>
      ) : (
        <>
          <div className="wordContainer">
            <Timer
              startTimmer={startTimmer}
              setShowResultPage={setShowResultPage}
              setStartTimer={setStartTimer}
              countdownTime={countdownTime}
              setCountDownTime={setCountDownTime}
            />
            {data?.split("")?.map((letter, letterIndex) => {
              return (
                <span className={`${classValue[letterIndex]}`} key={uuidv4()}>
                  {letter.toLowerCase()}
                </span>
              );
            })}
          </div>

          <input
            className="wordContainer_input"
            type="text"
            onKeyDown={changeState}
            onBlur={(event) => {
              event.target.focus();
            }}
            autoFocus
          />
        </>
      )}
      <Reloader wordCount={wordCount} database={database} setData={setData} />
    </div>
  );
};

export default WordSheet;
