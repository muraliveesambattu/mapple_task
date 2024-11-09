import React from "react";
import DisplayIcon from "./Icons/DisplayIcon";
import DashIcon from "./Icons/DashIcon";

const RemoteDesktop = () => {
  return (
    <>
      <div class="d-flex align-items-center">
        <div className="p-2 m-0">
          <DisplayIcon />
        </div>
        <div className="p-2">
          <p style={{ margin: 0 }}>
            Remote Desktop to{" "}
            <span style={{ color: "blue" }}>il-terminal-w1</span>
          </p>
        </div>
        <div class="ms-auto p-2">
          <DashIcon />
        </div>
      </div>
      <div>
          <table class="table table-borderless text-start">
            <thead>
              <tr>
                <th className="text-center">
                  {" "}
                  <span>.</span>
                </th>
                <th scope="col">SRC IP</th>
                <th scope="col">USER ID</th>
                <th scope="col">INTERNAL IP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>John</td>
                <td>Doe</td>
                <td>@johndoe</td>
              </tr>
            </tbody>
          </table>
        </div>
    </>
  );
};

export default RemoteDesktop;
