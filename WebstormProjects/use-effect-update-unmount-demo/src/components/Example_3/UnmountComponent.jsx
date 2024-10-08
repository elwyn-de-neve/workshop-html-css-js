import { useEffect } from "react";

function UnmountComponent() {
  useEffect(() => {
    console.log("Component is mounted");

    return () => {
      // Dit wordt uitgevoerd wanneer het component unmount
      console.log("Component is unmounted");
    };
  }, []);

  return <p>Unmounting Component is mounted!</p>;
}

export default UnmountComponent;
