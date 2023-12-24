// Import React and useState and useEffect hooks from React library
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios library
// Import Div and Text components from Atomize library
import { Div, Text } from "atomize";
import { useNavigate } from "react-router-dom"; // Corrected import

// Create component Timer that takes in minutes as a prop
const Timer = ({ minutes, pid, sid, totalmarks }) => {
  // Initialize time state with a function that checks if there is a time in local storage
  const [time, setTime] = useState(() => {
    let startTime = localStorage.getItem("startTime");
    if (startTime) {
      return new Date() - new Date(startTime); // if there is a start time in local storage, use that
    } else {
      const now = new Date();
      localStorage.setItem("startTime", now);
      return 0; // initialize time state to 0 if there isn't a start time in local storage
    }
  });
  const test = 2;
  const navigate = useNavigate(); // Corrected navigate function
  const setfinished = async () => {
    await axios
      .post("https://testhubbknd.onrender.com/api/student/setfinished", {
        paperid: pid,
        userid: sid,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  // Define what should happen when the timer ends
  const onEnd = () => {
    console.log("Timer ended");
    localStorage.removeItem("startTime");
    setfinished();
    navigate(`/results/${pid}/${sid}/${totalmarks}`);
  };

  // Set up a use effect that runs every second
  useEffect(() => {
    if (minutes > 0) {
      // Only start the timer if minutes is non-zero
      const interval = setInterval(() => {
        // Calculate the elapsed time
        const elapsedTime =
          new Date() - new Date(localStorage.getItem("startTime"));
        // Update time state with elapsed time
        setTime(elapsedTime);
        // console.log(elapsedTime);
        // console.log(minutes * 60 * 1000);
        // console.log(elapsedTime <= minutes * 60 * 1000);
        // If the elapsed time is greater than the time limit, clear the interval and run the onEnd function
        if (elapsedTime >= minutes * 60 * 1000) {
          clearInterval(interval);
          onEnd();
        }
      }, 1000);
      return () => clearInterval(interval); // clean up interval on unmount
    }
  }, [minutes]); // Add minutes as a dependency to the useEffect hook

  // Return the time remaining
  return (
    <Div>
      <Text
        textSize="title"
        fontFamily="Itim"
        m={{ r: "8%" }}
        textColor="#FCE2DB"
      >
        Time remaining: {minutes - Math.ceil(time / 1000 / 60)} minutes,{" "}
        {60 - Math.round((time / 1000) % 60)} seconds.
      </Text>
    </Div>
  );
};

// Export the Timer component
export default Timer;
