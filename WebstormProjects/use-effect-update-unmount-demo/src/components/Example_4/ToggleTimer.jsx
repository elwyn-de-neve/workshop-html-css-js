import { useState } from "react";
import TimerComponent from "./TimerComponent.jsx";

function ToggleTimer() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Unmount Timer" : "Mount Timer"}
      </button>
      {showTimer && <TimerComponent />}
    </div>
  );
}

export default ToggleTimer;
