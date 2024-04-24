import { useEffect, useState, useCallback } from "react";
import moment from "moment";

interface CountdownProps {
  weddingDate: string;
}

export default function Countdown({ weddingDate }: CountdownProps) {
  const calculateTimeLeft = useCallback(() => {
    const now = moment();
    const then = moment(weddingDate);
    const countdown = moment.duration(then.diff(now));

    const days = Math.floor(countdown.asDays());
    const hours = countdown.hours();
    const minutes = countdown.minutes();
    const seconds = countdown.seconds();

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [weddingDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="my-4 md:my-10 text-center">
        Contagem regressiva para o nosso casamento
      </h2>
      <div className="grid grid-cols-4 gap-4 md:gap-8">
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-fuchsia-900">
            {timeLeft.days}
          </div>
          <div className="text-sm sm:text-lg">dias</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-fuchsia-900">
            {timeLeft.hours}
          </div>
          <div className="text-sm sm:text-lg">horas</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-fuchsia-900">
            {timeLeft.minutes}
          </div>
          <div className="text-sm sm:text-lg">minutos</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-fuchsia-900">
            {timeLeft.seconds}
          </div>
          <div className="text-sm sm:text-lg">segundos</div>
        </div>
      </div>
    </section>
  );
}
