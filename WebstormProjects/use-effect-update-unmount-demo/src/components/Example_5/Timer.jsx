import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0); // Timer in seconden
  const [isRunning, setIsRunning] = useState(false); // Of de timer loopt
  const [hasStarted, setHasStarted] = useState(false); // Of de timer ooit gestart is

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      // Als de timer loopt, start een interval dat elke seconde de tijd bijwerkt
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0 && hasStarted) {
      // Als de timer gepauzeerd is en er tijd is verstreken, stop het interval
      clearInterval(interval);
      console.log("Timer is paused");
    }

    // Cleanup functie om het interval te clearen wanneer de component unmount of de isRunning state verandert
    return () => clearInterval(interval);
  }, [isRunning, time, hasStarted]); // De effect trigger op isRunning, time en hasStarted

  const handleStartPause = () => {
    setIsRunning(!isRunning);
    setHasStarted(true); // Markeer dat de timer tenminste eenmaal is gestart
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setHasStarted(false); // Reset alle state
  };

  return (
    <div>
      <h2>Time: {time} seconds</h2>
      <button onClick={handleStartPause}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset} disabled={!time}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
