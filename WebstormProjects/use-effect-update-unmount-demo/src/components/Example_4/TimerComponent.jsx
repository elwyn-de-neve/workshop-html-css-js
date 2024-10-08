import { useEffect, useState } from "react";

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      console.log("Interval running...");
    }, 1000);

    // Cleanup functie om het interval op te ruimen bij unmount
    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []); // Lege dependency array betekent dat het effect maar één keer wordt ingesteld

  return (
    <div>
      <p>Timer: {count} seconds</p>
    </div>
  );
}

export default TimerComponent;
