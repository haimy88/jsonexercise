import React from "react";
import data from "../data/Legends.json";
import MonitorItem from "../components/MonitorItem.js";
import Table from "../components/Table.js";

export default function Home() {
  console.log(data);

  return (
    <>
      {data.MonitorType.map((item) => {
        return <MonitorItem item={item} />;
      })}
      <Table />
    </>
  );
}
