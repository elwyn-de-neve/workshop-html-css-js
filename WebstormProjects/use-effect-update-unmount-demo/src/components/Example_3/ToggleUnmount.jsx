import { useState } from "react";
import UnmountComponent from "./UnmountComponent.jsx";

function ToggleUnmount() {
  const [isVisible, setIsVisible] = useState(true);

  const handleUnmount = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      {isVisible ? <UnmountComponent /> : <p>Component is unmounted!</p>}
      <button onClick={handleUnmount}>Unmount Component</button>
    </div>
  );
}

export default ToggleUnmount;
