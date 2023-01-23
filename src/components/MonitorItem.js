import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import data from "../data/Legends.json";
import { useDisplayContext } from "../contexts/DisplayContext";

export default function MonitorItem({ item }) {
  const { setDisplay } = useDisplayContext();

  const filtered = data.Monitor.filter(
    (monitor) => monitor.MonitorTypeId === item.Id
  );

  const handleDisplay = () => {
    const legend = data.Legends.filter((leg) => leg.Id === item.LegendId);
    setDisplay(legend[0].tags);
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)}>
            {item.Name}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {filtered.map((menuItem) => (
              <MenuItem onClick={handleDisplay}>{menuItem.Name}</MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
}
