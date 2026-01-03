import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {

  // Cursor position & hover state

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);


  // Event listeners for mouse movement & hover detection

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // Cleanup on unmount

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button").forEach(el => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);


  // Render the cursor div

  return (
    <div
      className={`cursor ${hover ? "cursor-hover" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;
