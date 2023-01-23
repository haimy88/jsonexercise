import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import data from "../data/Legends.json";

export default function MonitorItem({ item }) {
  const filtered = data.Monitor.filter(
    (monitor) => monitor.MonitorTypeId === item.Id
  );

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)}>
            {item.Name}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {filtered.map((menuItem) => (
              <MenuItem onClick={popupState.close}>{menuItem.Name}</MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
}
