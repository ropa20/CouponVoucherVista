import React from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const RecentActivities = ({ headers, recentActivity }) => {
  return (
    <>
      <p className="page-text">Recent Activities</p>
      <Table responsive="xl" className="recentact-table mt-3">
        <thead>
          <tr>
            {headers?.map((i, index) => {
              return <th key={index}>{i}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {recentActivity?.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.offer}</td>
                <td>{data.merchant_name}</td>
                <td>{data.date}</td>
                <td className="recentact-status">{data.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {recentActivity?.length === 0 ? (
        <div className="d-flex justify-content-center">
          <h4>No data available!</h4>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default RecentActivities;
