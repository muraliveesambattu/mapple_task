import React, { useEffect, useState } from "react";
import DisplayIcon from "./Icons/DisplayIcon";
import DashIcon from "./Icons/DashIcon";

const RemoteDesktop = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/cardData");
        const result = await response.json();
        console.log(result);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show loading message while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <div className="p-2 m-0">
          <DisplayIcon />
        </div>
        <div className="p-2">
          <p style={{ margin: 0 }}>
            Remote Desktop to{" "}
            <span style={{ color: "blue" }}>{data?.linkText}</span>
          </p>
        </div>
        <div className="ms-auto p-2">
          <DashIcon />
        </div>
      </div>
      <div>
        <table className="table table-borderless text-start">
          <thead>
            <tr>
              <th className="text-center">
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
              <td>{data?.srcIp}</td>
              <td>{data?.userId}</td>
              <td>{data?.internalIp}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RemoteDesktop;
