import React from "react";
import Questions from "./../../../Data/QuestionBank";
import "./Answer.css";
export default function Following() {
  return (
    <div className="answer-content">
      <p>Question added . personal Finance . Topic you might like</p>
      {Questions.map((question) => (
        <h1>{question.ques}</h1>
      ))}
      <p>4 Answers · Last followed 10m ago</p>
    </div>
  );
}
