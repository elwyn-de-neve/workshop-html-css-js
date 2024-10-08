import { useEffect, useState } from "react";
import axios from "axios";

function DataFetcherComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController(); // AbortController aanmaken
    setLoading(true);

    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://httpbin.org/delay/5", // Server wacht 5 seconden voordat hij antwoordt
          {
            signal: controller.signal, // Geef de abort-signaal door aan het axios verzoek
          },
        );

        // Als de component is unmount, zal deze code niet meer worden uitgevoerd
        setData(result.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup functie die de fetch annuleert bij unmount
    return () => {
      console.log("Component unmounted, aborting fetch...");
      controller.abort(); // Verzoek annuleren als het component unmount
    };
  }, []); // Lege dependency array zorgt dat dit effect alleen bij mount/unmount wordt uitgevoerd

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No Data</p>;

  return (
    <div>
      <h2>Data fetched:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetcherComponent;
