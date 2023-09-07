import { useEffect, useState } from "react";
import Shimmer from "./bodyContent/shimmer";
import WordSheet from "./bodyContent/contents/wordSheet";
import { fetchData, setWords, totalWords, totalTime } from "../utils/setters";

const BodyContents = () => {
  const [database, setDatabase] = useState({});
  const [data, setData] = useState("");
  const [wordCount, setWordCount] = useState(totalWords);

  useEffect(() => {
    fetchData(setDatabase);
  }, []);

  useEffect(() => {
    setData(setWords(wordCount, database));
  }, [database, wordCount]);

  return (
    <div className="content_wrapper">
      {data.length ? (
        <div>
          <WordSheet
            data={data}
            wordCount={wordCount}
            database={database}
            setData={setData}
          />
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default BodyContents;
