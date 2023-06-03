import React from "react";
import { useState } from "react";
import "./Circle.css";
import { useEffect } from "react";

function MakeCircles({ timerState, resetTimer }) {
  //create the first circle with id 1
  const [circles, setCircles] = useState([
    { color: "red", size: "large", xCoord: 50, yCoord: 50, id: 1 },
  ]);

  const [timerValue, setTimerValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerValue((prevValue) => prevValue + 1);
      console.log(timerValue);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timerValue > 3 && circles.length > 2) {
      // Call your function when the timer passes 3 seconds
      setTimerValue(0); // Invoke the resetTimer function to reset the timer state
      console.log("3 seconds has elapsed");
      setCircles((circles) => circles.slice(0, -2));
    }
  }, [timerValue]);

  //function to add a new circle
  const addNewCircle = (currentNum) => {
    var newItem;

    const randomNumberX =
      Math.random() * window.innerWidth - (Math.random() * 25 + 25); //200 will shift it 200px to left or up
    const randomNumberY =
      Math.random() * window.innerHeight - (Math.random() * 25 + 25);

    const randomColor = Math.floor(Math.random() * 6) + 1; // Between 1 and 6
    const randomSize = Math.floor(Math.random() * 3) + 1;

    var thisId = currentNum + 1;
    var thisColor;
    var thisSize;

    if (randomColor === 1) {
      thisColor = "red";
    } else if (randomColor === 2) {
      thisColor = "blue";
    } else if (randomColor === 3) {
      thisColor = "green";
    } else if (randomColor === 4) {
      thisColor = "pink";
    } else if (randomColor === 5) {
      thisColor = "yellow";
    } else if (randomColor === 6) {
      thisColor = "purple";
    }

    if (randomSize === 1) {
      thisSize = "large";
    } else if (randomSize === 2) {
      thisSize = "small";
    } else {
      thisSize = "medium";
    }

    newItem = {
      color: thisColor,
      size: thisSize,
      xCoord: randomNumberX,
      yCoord: randomNumberY,
      id: thisId,
    };
    console.log(newItem);
    console.log(circles.length);

    if (thisId === circles.length + 1) {
      setCircles([...circles, newItem]);
      setTimerValue(-1);
    } else {
      setCircles((circles) => circles.slice(0, -2));
    }
  };

  return (
    //score
    <div>
        <div class='noFlash'
        style={{
          zIndex: circles.length + 1,
        }}
      >{circles.length}
        </div>
      
    {timerValue >= 3 && circles.length < 4 && circles.length > 2 && (
        <div class='oneFlash'
        style={{
          zIndex: circles.length + 2,
        }}
      >.
        </div>
      )}
      {timerValue >= 2 && timerValue < 3 && circles.length > 2 && (
        <div class='oneFlash'
        style={{
          zIndex: circles.length + 2,
        }}
      >. .
        </div>
      )}

      {timerValue >= 1 && timerValue < 2 && circles.length > 2 && (
        <div class='oneFlash'
          style={{
            zIndex: circles.length + 2,
          }}
        >. . .
        </div>
      )}

      {circles.map((item, index) => (
        <div
          style={{
            position: "absolute",
            left: `${item.xCoord}px`,
            top: `${item.yCoord}px`,
          }}
        >
          {item.color === "red" && (
            <div
              className={`red-circle ${item.size}`}
              onClick={() => addNewCircle(item.id)}
            ></div>
          )}

          {item.color === "blue" && (
            <div
              className={`blue-circle ${item.size}`}
              onClick={() => addNewCircle(item.id)}
            ></div>
          )}

          {item.color === "green" && (
            <div
              className={`green-circle ${item.size}`}
              onClick={() => addNewCircle(item.id)}
            ></div>
          )}

          {item.color === "purple" && (
            <div
              className={`purple-circle ${item.size}`}
              onClick={() => addNewCircle(item.id)}
            ></div>
          )}

          {item.color === "pink" && (
            <div
              className={`pink-circle ${item.size}`}
              onClick={() => addNewCircle(item.id)}
            ></div>
          )}

          {item.color === "yellow" && (
            <div
              className={`yellow-circle ${item.size}`}
              onClick={() => addNewCircle(item.id)}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MakeCircles;
