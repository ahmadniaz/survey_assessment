import React, { useEffect, useState } from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";

const AllQuestions = ({ question, handleSaveResponses, setQuestionType }) => {
  const [titleType, setTitleType] = useState("");

  useEffect(() => {
    setQuestionType(question.type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTitleChange = (selectedOpt) => {
    setTitleType(selectedOpt);
    handleSaveResponses(selectedOpt);
  };

  return (
    <div>
      {question.type === "dropdown" ? (
        <Question1
          question={question}
          handleTitleChange={handleTitleChange}
          titleType={titleType}
          handleSaveResponses={handleSaveResponses}
        />
      ) : question.type === "dob" ? (
        <Question2
          question={question}
          handleSaveResponses={handleSaveResponses}
        />
      ) : question.type === "rating" ? (
        <Question3
          question={question}
          handleSaveResponses={handleSaveResponses}
        />
      ) : question.type === "explanation" ? (
        <Question4
          question={question}
          handleSaveResponses={handleSaveResponses}
        />
      ) : question.type === "multiple_choice" ? (
        <Question5
          question={question}
          handleSaveResponses={handleSaveResponses}
        />
      ) : null}
    </div>
  );
};

export default AllQuestions;
