import React, { useState } from "react";
import { Button, Col, Label, Row } from "reactstrap";
import "../Screen/screen.css";

const Question5 = ({ question, handleSaveResponses }) => {
  const [clickedOpt, setClickedOpt] = useState("");
  return (
    <div>
      {" "}
      <Row className="q_2_container_main">
        <Col className="q_number">
          <Button>{question.id}</Button>
        </Col>
        <Col className="q_2_container">
          <div className="tooltip_container">
            <Label>{question.title}</Label>
          </div>

          <Row className="q_4_textarea_row">
            {question.options.map((opt, ind) => {
              return (
                <div
                  className={
                    clickedOpt === ind
                      ? "q_5_options_container div_clicked"
                      : " q_5_options_container"
                  }
                  key={ind}
                  onClick={() => {
                    setClickedOpt(ind);
                    handleSaveResponses(opt);
                  }}
                >
                  <div className="q_5_options">
                    <Button>{Object.keys(opt)}</Button>
                    <p>{opt[Object.keys(opt)]}</p>
                  </div>
                </div>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Question5;
