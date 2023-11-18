import React, { useState } from "react";
import { Button, Col, Label, Row } from "reactstrap";
import "../Screen/screen.css";

const Question3 = ({ question, handleSaveResponses }) => {
  const [clicked, setClicked] = useState("");

  return (
    <div>
      {" "}
      <Row className="q_2_container_main">
        <div className="q_3_container">
          <div className="q3_inner_container">
            <Col className="q_number">
              <Button>{question.id}</Button>
            </Col>

            <Col className="q_2_container">
              <Label>{question.title}</Label>{" "}
            </Col>
          </div>

          <div className="q3_inner_container">
            <Col className="q_number">
              <Button>{question.sub_question?.id}</Button>
            </Col>
            <Col className="q_2_container">
              <Label>{question.sub_question?.title}</Label>{" "}
            </Col>
          </div>

          <Row className="q_3_options_container">
            <Col className="q_3_number">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  className={
                    clicked === index
                      ? "option_selected"
                      : "option_not_selected"
                  }
                  onClick={() => {
                    setClicked(index);
                    handleSaveResponses(index + 1);
                  }}
                >
                  {option}
                </Button>
              ))}
            </Col>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default Question3;
