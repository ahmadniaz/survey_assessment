import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import "./screen.css";
import questionsData from "../../data.json";
import AllQuestions from "../Questions/index";

const Screen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState([]);
  const [surveyStart, setSurveyStart] = useState(false);
  const [questionType, setQuestionType] = useState("");

  const questionsPerPage = 1;
  const totalPages = Math.ceil(questionsData.length / questionsPerPage);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNextClick = () => {
    if (currentPage === 0 && responses.length === 0) {
      window.alert("Please attempt this question to go to the next question");
    } else if (currentPage === 1 && responses.length === 1) {
      window.alert("Please attempt this question to go to the next question");
    } else if (currentPage === 2 && responses.length === 2) {
      window.alert("Please attempt this question to go to the next question");
    } else if (currentPage === 3 && responses.length === 3) {
      window.alert(
        "Please attempt this question click on Skip if you dont want to answer"
      );
    } else if (currentPage === 4 && responses.length === 4) {
      window.alert("Please attempt this question to go to the next question");
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSkipClick = () => {
    handleSaveResponses(currentPage + 1, "Not Attempted/Skipped");
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleNextClick();
      }
    };

    // Add event listener to handle Enter key press
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleNextClick, handleSkipClick]);

  const handleSaveResponses = (id, value) => {
    const newResponse = {
      qid: id,
      response: value,
    };

    const findIndex = responses.findIndex((resp) => resp.qid === id);
    if (findIndex !== -1) {
      responses[findIndex] = newResponse;
    } else {
      setResponses([...responses, newResponse]);
    }
  };
  const saveResponsesAsFile = () => {
    const jsonData = JSON.stringify(responses);

    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "survey_responses.json";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSubmitClick = () => {
    setCurrentPage(currentPage + 1);
    saveResponsesAsFile();
  };

  const renderQuestions = () => {
    const startIndex = currentPage * questionsPerPage;
    return questionsData
      .slice(startIndex, startIndex + questionsPerPage)
      .map((question, index) => {
        const questionIndex = startIndex + index;
        return (
          <div key={questionIndex}>
            <AllQuestions
              question={question}
              handleSaveResponses={(value) => {
                handleSaveResponses(questionIndex + 1, value);
              }}
              setQuestionType={setQuestionType}
            />
          </div>
        );
      });
  };

  return (
    <div>
      {" "}
      <Row>
        <Col xl={6}>
          <Card className="container">
            <CardHeader>
              {" "}
              <h3>Employee Mental Health Survey</h3>
            </CardHeader>
            {!surveyStart ? (
              <CardBody className="card_body">
                <div className="ok_button_container">
                  <p>Click here and start attempting the survey</p>
                  <Button onClick={() => setSurveyStart(true)}>
                    Start the Survey
                  </Button>
                </div>
              </CardBody>
            ) : (
              <CardBody className="card_body">
                {currentPage < totalPages ? (
                  <>
                    {renderQuestions()}
                    <Row className="q_2_form">
                      <div className="ok_button_container">
                        {questionType === "explanation" ? (
                          <span onClick={handleSkipClick}>Skip</span>
                        ) : null}
                        <Button
                          onClick={
                            currentPage === totalPages - 1
                              ? handleSubmitClick
                              : handleNextClick
                          }
                        >
                          {currentPage === totalPages - 1 ? "Submit" : "OK"}
                        </Button>
                        <span>or press Enter</span>
                      </div>
                    </Row>
                  </>
                ) : (
                  <p>Survey Completed. Thank you!</p>
                )}
              </CardBody>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Screen;
