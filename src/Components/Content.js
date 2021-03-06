import React from "react";
import InputField from "./InputField";
import { useMediaQuery } from "react-responsive";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: "Theme") =>
  createStyles({
    root: {
      backgroundColor: "#272c34",
      color: "white",
    },
  })
)(TableRow);

function createData(name: string, calories: string) {
  return { name, calories };
}

const rows = [
  createData("6Q18C18W14L5T", "FORERUNNER"),
  createData("7T5L1F5", "GRENADE"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const Content = () => {
  const classes = useStyles();

  const isPortrait = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div
      className="Content"
      style={{
        width: isPortrait ? "90%" : "70%",
      }}
    >
      <h1>Banished Communication</h1>
      <p>
        Master Chief, while exploring Installation 07, intercepted Banished
        communications, but they're too garbled and encrypted to make sense. And
        since Cortana's gone rogue, it falls on you, Echo 216, to help him
        interpret what intel the Banished are communicating, so that he can act
        on it before its too late. After running it through his suit's
        decryption system, he got two encrypted codes, "6Q18C18W14L5T", and
        "7T5L1F5" . The intercepted code, after being analyzed by the ship's
        comm system, spelled out "FORERUNNER" and "GRENADE", hinting that the
        intel has something to do with the ancient race that made the
        installations.
        <br />
        <br />
      </p>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sample Input</StyledTableCell>
              <StyledTableCell>Sample Output</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{ color: "white" }}
                >
                  {row.name}
                </StyledTableCell>
                <StyledTableCell style={{ color: "white" }}>
                  {row.calories}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h2>Question:</h2>
      <p>
        But before Chief could analyse the third code, his HUD picked up a
        perimeter breach and he only obtained the encrypted string! Echo 216, it
        is now your duty to decrypt the code, and get a clear picture of what is
        happening on Installation 07.
      </p>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sample Input</StyledTableCell>
              <StyledTableCell>Sample Output</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell
                component="th"
                scope="row"
                style={{ color: "white" }}
              >
                1V18G16Z
              </StyledTableCell>
              <StyledTableCell style={{ color: "#e33371" }}>
                Find the Answer
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />

      <InputField />
    </div>
  );
};

export default Content;
