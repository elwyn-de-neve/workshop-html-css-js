import { useState } from "react";
import DataFetcherComponent from "./DataFetcherComponent.jsx";

function ToggleDataFetcher() {
  const [showFetcher, setShowFetcher] = useState(true);

  return (
    <div>
      <button onClick={() => setShowFetcher(!showFetcher)}>
        {showFetcher ? "Unmount DataFetcher" : "Mount DataFetcher"}
      </button>
      {showFetcher && <DataFetcherComponent />}
    </div>
  );
}

export default ToggleDataFetcher;
