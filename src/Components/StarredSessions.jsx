import React from 'react';
import './StarredSessions.css';

const sessions = [
  { name: "Kevin Turner", date: "04/29/2014", time: "2:45 am", score: 92, imgSrc: "https://randomuser.me/api/portraits/men/50.jpg", scoreColor: "red" },
  { name: "Tom McLovin", date: "04/29/2014", time: "2:45 am", score: 89, imgSrc: "https://randomuser.me/api/portraits/men/73.jpg", scoreColor: "orange" },
  { name: "Sarah Marshall", date: "04/29/2014", time: "2:45 am", score: 76, imgSrc: "https://randomuser.me/api/portraits/men/72.jpg", scoreColor: "orange" },
  { name: "Nick Lara", date: "04/29/2014", time: "2:45 am", score: 55, imgSrc: "https://randomuser.me/api/portraits/men/70.jpg", scoreColor: "green" },
  { name: "John Hansen", date: "04/29/2014", time: "2:45 am", score: 43, imgSrc: "https://randomuser.me/api/portraits/men/75.jpg", scoreColor: "green" }
];

const StarredSessions = () => (
  <div className="starred-sessions">
    <div className="header">
      <span>⭐ Starred Sessions</span>
      <button className="dropdown-button">⋮</button>
    </div>
    <ul className="session-list">
      {sessions.map((session, index) => (
        <li key={index} className="session-item">
          <img src={session.imgSrc} alt={session.name} className="profile-pic" />
          <div className="session-details">
            <p className="name">{session.name}</p>
            <p className="datetime">{session.date} @ {session.time}</p>
          </div>
          <div className="score" style={{ backgroundColor: session.scoreColor }}>
            <span>SCORE</span>
            <span className="score-value">{session.score}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default StarredSessions;
