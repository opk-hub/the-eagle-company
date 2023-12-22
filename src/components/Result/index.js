import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Result = ({ onClose }) => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const storedParticipants = JSON.parse(localStorage.getItem("participants"));
    if (storedParticipants) {
      setParticipants(storedParticipants);
    }
  }, []);

  return (
    <div className="display-container">
      {participants.length > 0 && (
        <div>
          <h3>Score Board</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Speed</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant, index) => (
                <tr key={index}>
                  <td>{participant.name}</td>
                  <td>{participant.speed}</td>
                  <td>{participant.time}</td>
                  <td> 12:02 </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button type="button" className="back-button">
        <Link to="/">Back to Home</Link>
      </button>
      <button type="button" className="restart-button">
        <Link to="/race-track">Restart Race</Link>
      </button>
    </div>
  );
};

export default Result;
