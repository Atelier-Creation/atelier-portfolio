import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Preloader.css";
import favicon from "/logo1.svg";

export const Preloader = ({ exit, done }) => {
  const loaderRef = useRef();

  useEffect(() => {
    gsap.fromTo(loaderRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  useEffect(() => {
    if (exit) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: done, // Notify App when fade-out is complete
      });
    }
  }, [exit, done]);

  return (
    <div className="preloader" ref={loaderRef}>
      <div className="loader">
        <img src={favicon} alt="logo" className="loader-icon" />
      </div>
    </div>
  );
};
