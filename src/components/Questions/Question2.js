import React, { useEffect, useState } from "react";
import { Button, Col, Label, Row, UncontrolledTooltip } from "reactstrap";
import "../Screen/screen.css";

const Question2 = ({ question, handleSaveResponses }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (day && year.length === 4 && month) {
      const dob = day + "-" + month + "-" + year;
      handleSaveResponses(dob);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day, month, year]);

  const handleDayChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0 && value <= 31) {
      setDay(value);
      clearError("day");
    } else {
      setErrors({ ...errors, day: "Day should be between 1 and 31" });
    }
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0 && value <= 12) {
      setMonth(value);
      clearError("month");
    } else {
      setErrors({ ...errors, month: "Month should be between 1 and 12" });
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    setYear(value);
    if (value.length === 4 && value >= 1920 && value <= 2006) {
      setYear(year);
      clearError("year");
    } else {
      setErrors({
        ...errors,
        year: "Year should be between 1920 and 2006",
      });
    }
    if (!isNaN(value)) {
      setYear(value);
    }
  };

  const clearError = (fieldName) => {
    const updatedErrors = { ...errors };
    delete updatedErrors[fieldName];
    setErrors(updatedErrors);
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
            <Label>{question.title}</Label>{" "}
            <span>
              <div className="tooltip_button" id="tooltipTop">
                i
              </div>
              <UncontrolledTooltip
                placement="top"
                target="tooltipTop"
                className="tooltip"
              >
                {" "}
                Your Date of birth is required to accurately calculate your
                health age.{" "}
              </UncontrolledTooltip>
            </span>
          </div>
          <Row className="q_2_form">
            <div className="input_container">
              <Label>Day</Label>
              <input
                type="text"
                placeholder="DD"
                value={day}
                onChange={(e) => handleDayChange(e)}
              />
              {errors.day && (
                <span className="error_message">{errors.day}</span>
              )}
            </div>
            <div className="input_container">
              <Label>Month</Label>
              <input
                type="text"
                placeholder="MM"
                value={month}
                onChange={(e) => handleMonthChange(e)}
              />
              {errors.month && (
                <span className="error_message">{errors.month}</span>
              )}
            </div>
            <div className="input_container">
              <Label>Year</Label>
              <input
                type="text"
                placeholder="YYYY"
                value={year}
                onChange={(e) => handleYearChange(e)}
              />
              {errors.year && (
                <span className="error_message">{errors.year}</span>
              )}
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Question2;
