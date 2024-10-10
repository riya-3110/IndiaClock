import React, { useState, useEffect } from "react";

export const Content = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p>This is the clock that shows the time in India at all times</p> <br />
      <p className="time">
        This is the current Time :-
        <span>
          {time.toLocaleDateString()} -{time.toLocaleTimeString()}
        </span>
      </p>
    </>
  );
};
