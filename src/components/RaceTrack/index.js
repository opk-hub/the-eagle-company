import React, { useState, useEffect } from "react";

import "./index.css";
import { Link } from "react-router-dom";
const RaceTrack = ({ participants, onFinish }) => {
  const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const startTimer = () => {
    setTimer(setInterval(updateTimer, 1000));
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  const updateTimer = () => {
    setSeconds((prevSeconds) => prevSeconds + 1);

    if (seconds === 10) {
      stopTimer();
    }

    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);

      if (minutes === 60) {
        setMinutes(0);
      }
    }
  };

  const pad = (value) => {
    return value < 10 ? "0" + value : value;
  };

  useEffect(() => {
    return () => {
      // Cleanup the interval when the component unmounts
      clearInterval(timer);
    };
  }, [timer]);
  return (
    <div className="shapes-container">
      <div className="card track">
        <div className="track-2 four">
          <div className="mar">
            <p className="player-6"></p>
            <p className="p-names">opk</p>
          </div>

          <div className="track-2 five">
            <div className="mar">
              <p className="p-names">pk</p>
              <p className="player-5"></p>
            </div>

            <div className="track-2 six">
              <div className="mar">
                <p className="player-3"></p>
                <p className="p-names">gates</p>
              </div>

              <div className="track-2 seven">
                <div className="mar">
                  <p className="player-2"></p>
                  <p className="p-names">usha</p>
                </div>

                <div className="track-2 eight ">
                  <div className="mar">
                    <p className="p-names usain">usain</p>

                    <p className="player-1"></p>
                  </div>
                  <div className="track-2 nine ">
                    <div className="track-2 ten">
                      <h1 id="timer">
                        {" "}
                        Elapsed Time : <br />{" "}
                        {`${pad(minutes)}:${pad(seconds)}`}
                      </h1>
                    </div>
                    <p>Track length 400m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="race" onClick={startTimer}>
          Start Race
        </button>
        <Link to="/result">
          <button className="restart-button" onClick={stopTimer}>
            Finish the race
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RaceTrack;
