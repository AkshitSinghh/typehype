import { useEffect, useState } from "react";
import WordSheet from "./bodyContent/contents/wordSheet";
import { fetchData, setWords, totalWords } from "../utils/setters";

const BodyContents = ({ setSlideAnimation }) => {
  const [database, setDatabase] = useState({});
  const [data, setData] = useState("");
  const wordCount = totalWords;

  useEffect(() => {
    fetchData(setDatabase);
  }, []);

  useEffect(() => {
    setData(setWords(wordCount, database));
  }, [database, wordCount]);

  return (
    <div className="content_wrapper">
      <WordSheet
        data={data}
        wordCount={wordCount}
        database={database}
        setData={setData}
        setSlideAnimation={setSlideAnimation}
      />
    </div>
  );
};

export default BodyContents;
