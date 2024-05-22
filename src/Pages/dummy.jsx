import React from "react";

const Dummy = () => {
  const data = [
    {
      SNAP_DT: "2023-02-11",
      HEAD_CNT: 5,
      DAYS_EQUAL_0: 0,
      DAYS_LESS_3: 2,
      DAYS_GREATER_EQUAL_1: 5,
      DAYS_GREATER_EQUAL_2: 5,
      DAYS_GREATER_EQUAL_3: 3,
      DAYS_GREATER_EQUAL_4: 2,
      DAYS_GREATER_EQUAL_5: 2,
      AVG_DAYS: 3.4,
    },
    {
      SNAP_DT: "2023-02-11",
      HEAD_CNT: 5,
      DAYS_EQUAL_0: 0,
      DAYS_LESS_3: 2,
      DAYS_GREATER_EQUAL_1: 5,
      DAYS_GREATER_EQUAL_2: 5,
      DAYS_GREATER_EQUAL_3: 3,
      DAYS_GREATER_EQUAL_4: 2,
      DAYS_GREATER_EQUAL_5: 2,
      AVG_DAYS: 3.4,
    },
    {
      SNAP_DT: "2023-02-11",
      HEAD_CNT: 5,
      DAYS_EQUAL_0: 0,
      DAYS_LESS_3: 2,
      DAYS_GREATER_EQUAL_1: 5,
      DAYS_GREATER_EQUAL_2: 5,
      DAYS_GREATER_EQUAL_3: 3,
      DAYS_GREATER_EQUAL_4: 2,
      DAYS_GREATER_EQUAL_5: 2,
      AVG_DAYS: 3.4,
    },
    {
      SNAP_DT: "2023-02-11",
      HEAD_CNT: 5,
      DAYS_EQUAL_0: 0,
      DAYS_LESS_3: 2,
      DAYS_GREATER_EQUAL_1: 5,
      DAYS_GREATER_EQUAL_2: 5,
      DAYS_GREATER_EQUAL_3: 3,
      DAYS_GREATER_EQUAL_4: 2,
      DAYS_GREATER_EQUAL_5: 2,
      AVG_DAYS: 3.4,
    },
    {
      SNAP_DT: "2021-02-11",
      HEAD_CNT: 5,
      DAYS_EQUAL_0: 0,
      DAYS_LESS_3: 2,
      DAYS_GREATER_EQUAL_1: 5,
      DAYS_GREATER_EQUAL_2: 5,
      DAYS_GREATER_EQUAL_3: 3,
      DAYS_GREATER_EQUAL_4: 2,
      DAYS_GREATER_EQUAL_5: 2,
      AVG_DAYS: 3.4,
    },
    {
      SNAP_DT: "2019-02-11",
      HEAD_CNT: 5,
      DAYS_EQUAL_0: 0,
      DAYS_LESS_3: 2,
      DAYS_GREATER_EQUAL_1: 5,
      DAYS_GREATER_EQUAL_2: 5,
      DAYS_GREATER_EQUAL_3: 3,
      DAYS_GREATER_EQUAL_4: 2,
      DAYS_GREATER_EQUAL_5: 2,
      AVG_DAYS: 3.4,
    },
    {
      SNAP_DT: "2023-02-11",
      HEAD_CNT: 5,
      DAYS_EQUAL_0: 0,
      DAYS_LESS_3: 2,
      DAYS_GREATER_EQUAL_1: 5,
      DAYS_GREATER_EQUAL_2: 5,
      DAYS_GREATER_EQUAL_3: 3,
      DAYS_GREATER_EQUAL_4: 2,
      DAYS_GREATER_EQUAL_5: 2,
      AVG_DAYS: 3.4,
    },
    {
      SNAP_DT: "2023-02-11",
      HEAD_CNT: 5,
      DAYS_EQUAL_0: 0,
      DAYS_LESS_3: 2,
      DAYS_GREATER_EQUAL_1: 5,
      DAYS_GREATER_EQUAL_2: 5,
      DAYS_GREATER_EQUAL_3: 3,
      DAYS_GREATER_EQUAL_4: 2,
      DAYS_GREATER_EQUAL_5: 2,
      AVG_DAYS: 3.4,
    },
    {
      SNAP_DT: "2023-02-11",
      HEAD_CNT: 5,
      DAYS_EQUAL_0: 0,
      DAYS_LESS_3: 2,
      DAYS_GREATER_EQUAL_1: 5,
      DAYS_GREATER_EQUAL_2: 5,
      DAYS_GREATER_EQUAL_3: 3,
      DAYS_GREATER_EQUAL_4: 2,
      DAYS_GREATER_EQUAL_5: 2,
      AVG_DAYS: 3.4,
    },
    {
      SNAP_DT: "2023-02-11",
      HEAD_CNT: 5,
      DAYS_EQUAL_0: 0,
      DAYS_LESS_3: 2,
      DAYS_GREATER_EQUAL_1: 5,
      DAYS_GREATER_EQUAL_2: 5,
      DAYS_GREATER_EQUAL_3: 3,
      DAYS_GREATER_EQUAL_4: 2,
      DAYS_GREATER_EQUAL_5: 2,
      AVG_DAYS: 3.4,
    },
    {
      SNAP_DT: "2023-02-11",
      HEAD_CNT: 5,
      DAYS_EQUAL_0: 0,
      DAYS_LESS_3: 2,
      DAYS_GREATER_EQUAL_1: 5,
      DAYS_GREATER_EQUAL_2: 5,
      DAYS_GREATER_EQUAL_3: 3,
      DAYS_GREATER_EQUAL_4: 2,
      DAYS_GREATER_EQUAL_5: 2,
      AVG_DAYS: 3.4,
    },
    {
      SNAP_DT: "2023-02-11",
      HEAD_CNT: 5,
      DAYS_EQUAL_0: 0,
      DAYS_LESS_3: 2,
      DAYS_GREATER_EQUAL_1: 5,
      DAYS_GREATER_EQUAL_2: 5,
      DAYS_GREATER_EQUAL_3: 3,
      DAYS_GREATER_EQUAL_4: 2,
      DAYS_GREATER_EQUAL_5: 2,
      AVG_DAYS: 3.4,
    },
  ];
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <table>
        <>
          <thead>
            <tr>
              <th>{""}</th>
              {data?.map((item) => {
                return <th>{item.SNAP_DT}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DAYS_EQUAL_0</td>

              {data?.map((item) => {
                return (
                  <>
                    <td>{item.DAYS_EQUAL_0}</td>
                  </>
                );
              })}
            </tr>
            <tr>
              <td>DAYS_LESS_3</td>

              {data?.map((item) => {
                return (
                  <>
                    <td>{item.DAYS_LESS_3}</td>
                  </>
                );
              })}
            </tr>
            <tr>
              <td>DAYS_GREATER_EQUAL_1</td>

              {data?.map((item) => {
                return (
                  <>
                    <td>{item.DAYS_GREATER_EQUAL_1}</td>
                  </>
                );
              })}
            </tr>
            <tr>
              <td>DAYS_GREATER_EQUAL_2</td>

              {data?.map((item) => {
                return (
                  <>
                    <td>{item.DAYS_GREATER_EQUAL_2}</td>
                  </>
                );
              })}
            </tr>
            <tr>
              <td>DAYS_GREATER_EQUAL_3</td>

              {data?.map((item) => {
                return (
                  <>
                    <td>{item.DAYS_GREATER_EQUAL_3}</td>
                  </>
                );
              })}
            </tr>
            <tr>
              <td>DAYS_GREATER_EQUAL_4</td>

              {data?.map((item) => {
                return (
                  <>
                    <td>{item.DAYS_GREATER_EQUAL_4}</td>
                  </>
                );
              })}
            </tr>
            <tr>
              <td>DAYS_GREATER_EQUAL_5</td>

              {data?.map((item) => {
                return (
                  <>
                    <td>{item.DAYS_GREATER_EQUAL_5}</td>
                  </>
                );
              })}
            </tr>
            <tr>
              <td>AVG_DAYS</td>

              {data?.map((item) => {
                return (
                  <>
                    <td>{item.AVG_DAYS}</td>
                  </>
                );
              })}
            </tr>
            <tr>
              <td>HEAD_CNT</td>

              {data?.map((item) => {
                return (
                  <>
                    <td>{item.HEAD_CNT}</td>
                  </>
                );
              })}
            </tr>
          </tbody>
        </>
      </table>
    </div>
  );
};

export default Dummy;
