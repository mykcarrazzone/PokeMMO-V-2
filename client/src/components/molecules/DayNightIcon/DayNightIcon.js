import React, { useState, useEffect } from "react";

const IsNight = () => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let currentHour = new Date().getHours();
      let currentMinutes = new Date().getMinutes();
      if ((currentHour >= 17) || currentHour < 8) {
        setIsNight(true);
      } else {
        setIsNight(false);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isNight ? (
        <div className="fixed top-0 left-0">
          <div className="rounded-full">
            <i className="fas fa-moon text-white"></i>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 left-0">
          <div className="rounded-full">
            <i className="fas fa-sun text-[#e2e60efa]"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default IsNight;
