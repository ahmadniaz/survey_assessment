import React from "react";
import { Button, Col, Label, Row } from "reactstrap";
import CustomSelect from "../Select/CustomSelect";
import "../Screen/screen.css";

const Question1 = ({ question, handleTitleChange, titleType }) => {
  return (
    <div>
      {" "}
      <Row className="q_container_main">
        <Col className="q_number">
          <Button>{question.id}</Button>
        </Col>
        <Col className="q_container">
          <Label>{question.title}</Label>{" "}
          <CustomSelect
            options={question.options}
            handleTitleChange={handleTitleChange}
            titleType={titleType}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Question1;
