import messages from "../utils/messages";

export default function QuizResult({
  correctAnswers,
  totalQuestions,
}: {
  correctAnswers: number;
  totalQuestions: number;
}) {
  const percentage = (correctAnswers / totalQuestions) * 100;

  let message = "";
  if (correctAnswers === totalQuestions) {
    message = messages.congratulations;
  } else if (correctAnswers === 0) {
    message = messages.lowScore;
  } else if (percentage > 80) {
    message = messages.excellentScore;
  } else if (percentage > 50) {
    message = messages.halfScore;
  } else {
    message = messages.tioDoNoivo;
  }

  return (
    <div className="mt-4">
      <p className="text-2xl font-semibold text-red-700 text-center p-8">
        {`Você acertou ${correctAnswers} de ${totalQuestions} questões!`}
      </p>
      <p className="text-lg text-gray-700 text-center p-8">{message}</p>
    </div>
  );
}
