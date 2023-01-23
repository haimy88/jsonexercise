import React from "react";
import data from "../data/Legends.json";
import MonitorItem from "../components/MonitorItem.js";
import Table from "../components/Table.js";
import { useDisplayContext } from "../contexts/DisplayContext";
import { useWindowSize } from "../hooks/windowSize";

export default function Home() {
  const { display } = useDisplayContext();

  const windowSize = useWindowSize();

  const homeStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: windowSize[1] > 380 ? "45px" : "30px",
    fontFamily: "Georgia",
    color: "#390f66cc",
  };

  const warningStyle = {
    fontSize: "30px",
    marginTop: "10%",
    fontFamily: "Garamond",
  };

  const buttonStyle = {
    position: "absolute",
    top: "500px",
  };

  return (
    <>
      <div style={homeStyle}>
        <h1 style={titleStyle}>Legend Display</h1>
        {display.length > 0 && <Table />}
        {display.length === 0 && (
          <div style={warningStyle}>No Legend Selected</div>
        )}
        <div style={buttonStyle}>
          {data.MonitorType.map((item) => {
            return <MonitorItem item={item} />;
          })}
        </div>
      </div>
    </>
  );
}
