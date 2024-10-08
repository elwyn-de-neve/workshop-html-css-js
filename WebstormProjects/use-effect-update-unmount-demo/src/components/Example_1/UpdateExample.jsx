import { useEffect, useState } from "react";

function UpdateExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Dit wordt uitgevoerd na elke render wanneer de count verandert
    // document.title = `You clicked ${count} times`;
  }, []); // De dependency array met count

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </>
  );
}

export default UpdateExample;
