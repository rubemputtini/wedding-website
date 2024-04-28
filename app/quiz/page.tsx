"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import quizQuestions from "../utils/quiz";
import QuizHeader from "./QuizHeader";
import QuizBody from "./QuizBody";
import QuizResult from "./QuizResult";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const totalQuestions = quizQuestions.length;

  const handleOptionSelect = (optionIndex: number) => {
    if (!answerSubmitted) {
      setSelectedOption(optionIndex);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setAnswerSubmitted(false);
    setShowErrorMessage(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishQuiz = () => {
    setQuizCompleted(true);
  };

  const checkAnswer = () => {
    if (selectedOption !== null) {
      const isCorrect =
        quizQuestions[currentQuestion].correctAnswerIndex === selectedOption;
      if (isCorrect) {
        setCorrectAnswers(correctAnswers + 1);
      }
      setAnswerSubmitted(true);
    } else {
      setShowErrorMessage(true);
    }
  };

  const setOptionColors = () => {
    const correctIndex = quizQuestions[currentQuestion].correctAnswerIndex;
    const selectedOptionIndex = selectedOption !== null ? selectedOption : -1;

    return quizQuestions[currentQuestion].options.map((_, index) => {
      if (answerSubmitted) {
        if (index === selectedOptionIndex) {
          if (index === correctIndex) {
            return "bg-green-700";
          } else {
            return "bg-red-700";
          }
        } else if (index === correctIndex) {
          return "bg-green-700";
        }
      }
      return "bg-indigo-500";
    });
  };

  return (
    <>
      <Nav />
      <section className="flex flex-col items-center justify-center bg-violet-100 min-h-screen">
        <div className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
          <QuizHeader />
          {currentQuestion < totalQuestions && (
            <QuizBody
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
              quizQuestions={quizQuestions}
              selectedOption={selectedOption}
              answerSubmitted={answerSubmitted}
              handleOptionSelect={handleOptionSelect}
              checkAnswer={checkAnswer}
              handleNextQuestion={handleNextQuestion}
              showErrorMessage={showErrorMessage}
              setOptionColors={setOptionColors}
            />
          )}
          {currentQuestion >= totalQuestions && (
            <QuizResult
              correctAnswers={correctAnswers}
              totalQuestions={totalQuestions}
            />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
