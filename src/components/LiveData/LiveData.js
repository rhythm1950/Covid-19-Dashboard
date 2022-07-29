import React, { useEffect, useState } from "react";
import "./LiveData.css";

const LiveData = () => {
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    fetch("https://data.covid19india.org/data.json")
      .then((response) => response.json())
      .then((data) => setStateData(data.statewise));
  }, []);

  return (
    <div className="container pt-5">
      <table className="table table-striped table-hover">
        <thead className="table-dark fixed">
          <tr>
            <th scope="col">#No.</th>
            <th scope="col">State</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Recovered</th>
            <th scope="col">Death</th>
            <th scope="col">Updated On</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {stateData.map((data, index) => {
            return (
              <tr>
                <th scope="row">{index}</th>
                <td>{data.state}</td>
                <td>{data.confirmed}</td>
                <td>{data.recovered}</td>
                <td>{data.deaths}</td>
                <td>{data.lastupdatedtime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LiveData;
