import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Import your CSS file for EntryForm styles

const EntryForm = ({ onSubmit }) => {
  // State to manage participants' information
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [time, setTime] = useState("");

  // Load participants from local storage on component mount
  useEffect(() => {
    const storedParticipants = JSON.parse(localStorage.getItem("participants"));
    if (storedParticipants) {
      setParticipants(storedParticipants);
    }
  }, []);

  // Function to add a participant
  const handleAddParticipant = () => {
    const newParticipant = { name, speed, time };
    const newParticipants = [...participants, newParticipant];

    // Save participants to local storage
    localStorage.setItem("participants", JSON.stringify(newParticipants));

    setParticipants(newParticipants);
    setName("");
    setSpeed("");
    setTime("");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>RUNNER DETAILS</h2>
        <p className="des">*You can add max 10 participants</p>
        <form>
          <label>
            Name <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Speed <br />
            <input
              type="text"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
            />
          </label>
          <label>
            Start Time <br />
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>
          <button
            className="add-button"
            type="button"
            onClick={handleAddParticipant}
          >
            + ADD RUNNER
          </button>
        </form>
      </div>

      <div className="display-container">
        {participants.length > 0 && (
          <div>
            <h3>LIST OF PARTICIPANTS:</h3>
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
                    <td> - </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="line"></p>
        <div className="button-container">
          <button type="button" className="start-button">
            <Link to="/race-track">Start Race</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntryForm;
