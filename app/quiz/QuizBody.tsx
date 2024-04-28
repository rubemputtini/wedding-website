import React from "react";
import { Question } from "../utils/quiz";

interface Props {
  currentQuestion: number;
  totalQuestions: number;
  quizQuestions: Question[];
  selectedOption: number | null;
  answerSubmitted: boolean;
  handleOptionSelect: (optionIndex: number) => void;
  checkAnswer: () => void;
  handleNextQuestion: () => void;
  showErrorMessage: boolean;
  setOptionColors: () => string[];
}

export default function QuizBody({
  currentQuestion,
  totalQuestions,
  quizQuestions,
  selectedOption,
  answerSubmitted,
  handleOptionSelect,
  checkAnswer,
  handleNextQuestion,
  showErrorMessage,
  setOptionColors,
}: Props) {
  return (
    <>
      <div className="mb-6">
        <p className="text-xl text-center text-gray-700">
          {quizQuestions[currentQuestion].question}
        </p>
      </div>
      <div className="mb-8">
        <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
          <div
            className="bg-blue-500 h-full rounded-full"
            style={{
              width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {quizQuestions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`${setOptionColors()[index]} ${
              selectedOption === index && answerSubmitted ? "opacity-100" : ""
            } ${
              (setOptionColors()[index] === "bg-green-700 opacity-100" ||
                setOptionColors()[index] === "bg-red-700 opacity-100") &&
              "pointer-events-none"
            } text-white rounded-2xl p-4 font-semibold ${
              selectedOption === index && !answerSubmitted ? "opacity-50" : ""
            }`}
            onClick={() => handleOptionSelect(index)}
            disabled={answerSubmitted}
          >
            {option}
          </button>
        ))}
      </div>
      {showErrorMessage && (
        <p className="text-red-600 mb-4 text-center">
          Opaaa, nada de ficar em cima do muro 🤪
        </p>
      )}
      <div className="flex flex-col justify-center items-center h-full">
        <button
          className={`bg-${answerSubmitted ? "indigo" : "green"}-500 hover:bg-${
            answerSubmitted ? "indigo" : "green"
          }-600 text-white w-2/3 p-4 rounded-2xl font-extrabold text-xl`}
          onClick={answerSubmitted ? handleNextQuestion : checkAnswer}
        >
          {answerSubmitted ? "PRÓXIMA" : "ENVIAR"}
        </button>
      </div>
    </>
  );
}
