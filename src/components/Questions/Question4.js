import React, { useState } from "react";
import { Button, Col, Label, Row, UncontrolledTooltip } from "reactstrap";
import "../Screen/screen.css";

const Question4 = ({ question, handleSaveResponses }) => {
  const [textValue, setTextValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 250) {
      setTextValue(inputValue);
      setError(false);
    } else {
      setError(true);
    }
  };
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
            <span>
              <div className="tooltip_button" id="tooltipTop">
                i
              </div>
              <UncontrolledTooltip
                placement="top"
                target="tooltipTop"
                className="tooltip"
              >
                Knowing other work or non-work drivers of stress may help your
                organization implement practices to counter these factors.
              </UncontrolledTooltip>
            </span>
          </div>
          <Row className="q_4_span_row">
            <span>Please enter upto 250 characters below</span>
          </Row>

          <Row className="q_4_textarea_row">
            <div>
              <textarea
                rows={8}
                cols={70}
                value={textValue}
                onChange={handleChange}
                onBlur={(e) => handleSaveResponses(e.target.value)}
                className={error ? "error" : ""}
              ></textarea>
              {error && (
                <p className="error_message">Character limit of 250 reached</p>
              )}
            </div>{" "}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Question4;
