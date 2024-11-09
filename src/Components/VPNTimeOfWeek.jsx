import React from "react";
import ChartIcon from "./Icons/ChartIcon";
import "./vpn.css";
import TimeChart from "./TimeChart";
import VPNChart from "./VPNChart";
const VPNTimeOfWeek = () => {
  return (
    <>
      <div class="d-flex align-items-center">
        <div className="p-2 m-0">
          <ChartIcon />
        </div>
        <div className="p-2">
          <p style={{ margin: 0 }}>VPN Time Of Week</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="custom-card">
            <div class="title">CONFIDENCE</div>
            <div class="value confidence-value qty">60%</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="custom-card">
            <div class="title">VALUES</div>
            <div class="value qty">3</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="custom-card">
            <div class="title">ENTRIES</div>
            <div class="value qty">125</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="custom-card">
            <div class="title">LAST UPDATE</div>
            <div class="value" style={{ marginTop: "6px" }}>
              yesterday
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <VPNChart />
      </div>
    </>
  );
};

export default VPNTimeOfWeek;
