import React, { useState, useEffect } from 'react';

function Timer({ onTimerChange }) {
  const [timerValue, setTimerValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerValue((prevValue) => prevValue + 1);
      onTimerChange(timerValue); // Invoke the callback with the updated timer value
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div>Timer: {timerValue}</div>
    </div>
  );
}

export default Timer;
