import moment from "moment";
import React, { useEffect, useState } from "react";

const useDates = (targetDate) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const target = moment(targetDate);
      const duration = moment.duration(target.diff(now));

      console.log({ target });

      setTimeRemaining({
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });

      if (duration.asSeconds() <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);
  return { timeRemaining };
};

export default useDates;
