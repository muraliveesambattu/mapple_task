import React, { useEffect, useState } from "react";
import "./StarredSessions.css";

const StarredSessions = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const getStarredSessions = () => {
      fetch("http://localhost:3000/StarredSessions")
        .then((response) => response.json())
        .then((data) => setSessions(data))
        .catch((error) => console.error("Error fetching sessions:", error));
    };

    // Initial fetch when the component mounts
    getStarredSessions();

    // Set up the interval to fetch data every 10 seconds
    const intervalId = setInterval(getStarredSessions, 60000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="starred-sessions">
      <div className="header">
        <span>⭐ Starred Sessions</span>
        <button className="dropdown-button">⋮</button>
      </div>
      <ul className="session-list">
        {sessions.map((session, index) => (
          <li key={index} className="session-item">
            <img
              src={session.imgSrc}
              alt={session.name}
              className="profile-pic"
            />
            <div className="session-details">
              <p className="name">{session.name}</p>
              <p className="datetime">
                {session.date} @ {session.time}
              </p>
            </div>
            <div
              className="score"
              style={{ backgroundColor: session.scoreColor }}
            >
              <span>SCORE</span>
              <span className="score-value">{session.score}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarredSessions;
