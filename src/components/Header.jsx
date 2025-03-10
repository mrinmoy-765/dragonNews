import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(
    moment().format("MMMM Do YYYY, h:mm:ss a")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000); // Updates every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="Logo" />
      </div>
      <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
      <p>{currentTime}</p>
    </div>
  );
};

export default Header;
