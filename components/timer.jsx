import { useEffect, useState } from "react";
import { totalTime } from "../utils/setters";

const Timer = ({
  startTimmer,
  setShowResultPage,
  setStartTimer,
  countdownTime,
  setCountDownTime,
}) => {
  const [time, setTime] = useState(0);
  const [coundown, setCountDown] = useState(null);

  useEffect(() => {
    if (countdownTime <= 0) {
      setShowResultPage(true);
      setStartTimer(false);
    }

    if (startTimmer && coundown == null) {
      let currentTime = Math.round(new Date().getTime() / 1000);
      setTime(currentTime);

      let futureTime = Math.round(
        (new Date().getTime() + totalTime * 1000) / 1000
      );
      setCountDown(futureTime);

      setCountDownTime(futureTime - currentTime);
      setTimeout(() => {
        setTime(time + 1);
      }, 100);
    } else if (startTimmer) {
      let currentTime = Math.round(new Date().getTime() / 1000);
      setCountDownTime(coundown - currentTime);
      setTimeout(() => {
        setTime(time + 1);
      }, 100);
    } else {
      setTime(0);
      setCountDownTime(totalTime);
      setCountDown(null);
    }
  }, [time, startTimmer, countdownTime]);

  return <div className="timmer">{countdownTime}</div>;
};

export default Timer;
