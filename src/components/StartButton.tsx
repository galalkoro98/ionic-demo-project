/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './StartButton.css';

interface StartButtonProps {}

export const StartButton: React.FC<StartButtonProps> = () => {
  return (
    <section className="landing">
      <div className="landing__container">
        <div className="landing__content">
          <div className="landing__title">
            <h1>Quiz App</h1>
            <h2 className="start__title">Welcome to the Quiz Challenge!</h2>
          </div>
          <div className="image__container">
            <img src="../../assets/icon/quiz.png" alt="quiz image" />
          </div>
          <div className="start__button__container">
            <button className="start__button">Start</button>
          </div>
        </div>
      </div>
    </section>
  );
};
