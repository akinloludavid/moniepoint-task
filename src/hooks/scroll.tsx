import { useEffect, useState } from "react";

const useMouseWheel = (callback?:any) => {
  const [wheelDirection, setWheelDirection] = useState<'up'|'down'|''>('');

  useEffect(() => {
    let requestId:number;

    const handleWheel = (e:any) => {
      const deltaY = e.deltaY;

      // Determine the wheel direction based on deltaY
      const direction = deltaY > 0 ? "down" : "up";

      setWheelDirection(direction);

      // Execute the provided callback with the direction
      if (callback) {
        callback(direction);
      }

      // Use requestAnimationFrame for continuous updates during mouse movement
      requestId = requestAnimationFrame(() => setWheelDirection(''));
    };

    // Attach the event listener when the component mounts
    window.addEventListener("wheel", handleWheel);

    // Clean up the event listener and cancel animation frame when the component unmounts
    return () => {
      window.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return wheelDirection;
};

export default useMouseWheel;
