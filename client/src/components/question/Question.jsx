import React from 'react';
import Answer from './Answer';
import HelpfulQuestion from './HelpfulQuestion';

export default function Question(props) {
  let AnswerList = Object.keys(props.question.answers).map((objKey) => {
    return <Answer key={props.question.answers[objKey].id} answer={props.question.answers[objKey]}/>
  })
  return (
    <div style={{ padding: '10px' }}>
      <h2 style={{ display: 'inline' }}>Q: </h2>
      <span>{props.question.question_body}</span>
      <HelpfulQuestion />
      {AnswerList}
      {/* {JSON.stringify(Object.keys(props.question.answers))} */}
    </div>
  );
}
