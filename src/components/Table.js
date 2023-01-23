import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDisplayContext } from "../contexts/DisplayContext";
import SquareIcon from "@mui/icons-material/Square";
import { useWindowSize } from "../hooks/windowSize";

export default function DenseTable() {
  const windowSize = useWindowSize();

  const { display } = useDisplayContext();
  return (
    <TableContainer
      component={Paper}
      sx={{ width: windowSize[1] > 380 ? 360 : 260 }}
    >
      <Table
        sx={{ width: windowSize[1] > 380 ? 360 : 260 }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left"></TableCell>
            <TableCell>Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {display.map((row) => (
            <TableRow
              key={row.Label}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">
                <SquareIcon sx={{ color: row.Color }} />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.Label}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
