
import React, { useRef, useState } from "react";

function TiltCard({ children, maxRotate = 10 }) {
  const ref = useRef();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [onHover, setOnHover] = useState(false);

  function handleMouseMove({ nativeEvent: event }) {
    if (ref && ref.current) {
      const {
        offsetWidth: width,
        offsetHeight: height,
        offsetLeft,
        offsetTop
      } = ref.current;

      const centerX = offsetLeft + width ;
      const centerY = offsetTop + height;

      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;

      // normalization
      // mouseX's range (- width/2 ~ width /2)
      // rotation Y rotate corresponding to width.
      // It creates a effect of staring at the mouse cursor
      const rotateY = (mouseX / (width / 5)) * maxRotate * 0.05;
      const rotateX = (mouseY / (height / 5)) * maxRotate * -0.05;

      setRotateX(rotateX.toFixed(1));
      setRotateY(rotateY.toFixed(1));
    }
  }

  function handleMouseLeave() {
    backToDefaultPosition();
    setOnHover(false);
  }

  function handleMouseEnter() {
    setOnHover(true);
  }

  function backToDefaultPosition() {
    if (ref && ref.current) {
      setRotateX(0);
      setRotateY(0);
    }
  }

  return (
    <div
      className="full-page"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TextBlock />
      <div
        className="card tilt"
        style={{
          transform: `perspective(800px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)`,
          transition: onHover
            ? "none"
            : "transform 0.6s cubic-bezier(0.2, 0.4, 0.4, 0.9)"
        }}
      >
        {children}
      </div>
    </div>
  );
}

function TextBlock() {
  return (
    <div className="intro">
   
    </div>
  );
}

export default TiltCard;
