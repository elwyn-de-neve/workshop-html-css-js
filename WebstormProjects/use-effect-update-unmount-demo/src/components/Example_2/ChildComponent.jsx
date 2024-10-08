import { useEffect, useState } from "react";

function ChildComponent({ text }) {
  const [reversedText, setReversedText] = useState("");

  useEffect(() => {
    // useEffect wordt getriggerd wanneer 'text' verandert
    const reversed = text.split("").reverse().join("");
    setReversedText(reversed);
    console.log("Tekst wordt ge-update en omgedraaid");
  }, [text]); // De dependency array bevat 'text', dus het effect wordt uitgevoerd bij veranderingen in 'text'

  return (
    <div>
      <p>Original Text: {text}</p>
      <p>Reversed Text: {reversedText}</p>
    </div>
  );
}

export default ChildComponent;
