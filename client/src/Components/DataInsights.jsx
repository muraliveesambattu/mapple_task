import React from 'react';
import './DataInsights.css';

const DataInsights = () => (
  <div className="data-insights">
    <div className="header data">
      <span>Data Insights</span>
      <button className="dropdown-button">📊</button>
    </div>
    <div className="section">
      <h4>🖥️ WORKSTATIONS</h4>
      <ul>
        <li>WCCN20129</li>
        <li>WCCN20130</li>
        <li>WCCN20131</li>
        <li>WCCN20132</li>
        <li>WCCN20133</li>
      </ul>
    </div>
    <div className="section">
      <h4>💾 LOGON ASSETS</h4>
      <ul>
        <li>asset1</li>
        <li>asset2</li>
        <li>asset3</li>
        <li>asset4</li>
        <li>asset5</li>
      </ul>
    </div>
    <div className="section">
      <h4>📊 NETWORK ZONES</h4>
      <ul>
        <li>Zone 1</li>
        <li>Zone 2</li>
        <li>Zone 3</li>
        <li>Zone 4</li>
        <li>Zone 5</li>
      </ul>
    </div>
  </div>
);

export default DataInsights;
