import React from "react";
import data from "../data/Legends.json";
import MonitorItem from "../components/MonitorItem.js";

export default function Home() {
  console.log(data);

  return (
    <>
      {data.MonitorType.map((item) => {
        return <MonitorItem item={item} />;
      })}
    </>
  );
}
