import { useState } from "react";
import ChildComponent from "./ChildComponent.jsx";

function ParentComponent() {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something..."
      />
      <ChildComponent text={inputText} />
    </div>
  );
}

export default ParentComponent;
