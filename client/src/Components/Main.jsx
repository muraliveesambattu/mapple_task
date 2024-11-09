import React from "react";
import "./Main.css";
import RemoteDesktop from "./RemoteDesktop";
import VPNTimeOfWeek from "./VPNTimeOfWeek";
import TimeChart from "./TimeChart";
import RiskAnalysis from "./RiskAnalysis";
import StarredSessions from "./StarredSessions";
import DataInsights from "./DataInsights";

const Main = () => {
  return (
    <div>
      <div class="grid-container mt-1">
        <div class="grid-item">
          <div class="card">
            <div class="card-body">
              <RemoteDesktop />
            </div>
          </div>
          <div class="card mt-2">
            <div class="card-body">
              <VPNTimeOfWeek />
            </div>
          </div>
        </div>
        <div class="grid-item">
          <StarredSessions/>
          <TimeChart/>
        </div>
        <div class="grid-item">
          <DataInsights/>
        </div>
        <div class="grid-item">
          <RiskAnalysis/>
        </div>
      </div>
    </div>
  );
};

export default Main;
