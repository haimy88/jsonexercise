import React from "react";
import data from "../data/Legends.json";
import MonitorItem from "../components/MonitorItem.js";
import Table from "../components/Table.js";
import { useDisplayContext } from "../contexts/DisplayContext";

export default function Home() {
  const { display } = useDisplayContext();

  return (
    <>
      {data.MonitorType.map((item) => {
        return <MonitorItem item={item} />;
      })}
      {display.length > 0 && <Table />}
    </>
  );
}
