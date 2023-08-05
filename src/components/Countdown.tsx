import { useState, useEffect } from "react";

const Countdown = ({ date }: { date: string }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(date).getTime() - new Date().getTime();
    if (difference <= 0) {
      return {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const months = Math.floor(difference / (30 * 24 * 60 * 60 * 1000));
    const days = Math.floor((difference / (24 * 60 * 60 * 1000)) % 30);
    const hours = Math.floor((difference / (60 * 60 * 1000)) % 24);
    const minutes = Math.floor((difference / (60 * 1000)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return (
    <div className="flex flex-col align-middle pl-10 md:pl-0  w-full md:block md:text-left">
      <span>
        <strong className="font-semibold text-3xl">{timeLeft.months} </strong>
        {timeLeft.months == 1 ? "month" : "months"},
      </span>
      <span>
        <strong className="font-semibold text-3xl"> {timeLeft.days} </strong>
        {timeLeft.days == 1 ? "day" : "days"},
      </span>
      <span>
        <strong className="font-semibold text-3xl"> {timeLeft.hours} </strong>
        {timeLeft.hours == 1 ? "hour" : "hours"},
      </span>
      <span>
        <strong className="font-semibold text-3xl"> {timeLeft.minutes} </strong>
        {timeLeft.minutes == 1 ? "minute" : "minutes"},
      </span>
      <span>
        <strong className="font-semibold text-3xl"> {timeLeft.seconds} </strong>
        {timeLeft.seconds == 1 ? "second" : "seconds"}.
      </span>
    </div>
  );
};

export default Countdown;
