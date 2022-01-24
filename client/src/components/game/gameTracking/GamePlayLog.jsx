import {
  Paper,
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useTheme,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { useSelector } from "react-redux";
import AppTheme from "../../../styles/AppTheme";

const TableCellStyled = withStyles((theme) => ({
  body: {
    color: theme.palette.common.white,
  },
}))(TableCell);

const TableRowStyled = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.common.green,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  container: {
    maxHeight: 350,
  },
  tableHeader: {
    backgroundColor: "black",
  },
  table: {
    minWidth: 180,
  },
});

const logColumns = [
  { id: "id", label: "", minWidth: 10 },
  { id: "Player", label: "Player", minWidth: 20 },
  { id: "Action", label: "Action", minWidth: 160 },
];

// Records all player moves and actions made, alongside damage and score values made.
const GamePlayLog = () => {
  const theme = useTheme(AppTheme);
  const classes = useStyles();
  const history = useSelector((state) => state.history.gameHistory);

  return (
    <Paper>
      <TableContainer className={classes.container}>
        <Table className={classes.table} size="small" aria-label="sticky table">
          <caption style={{ color: theme.palette.text.primary }}>
            Log for recording player actions
          </caption>
          <TableHead>
            <TableRow className={classes.tableHeader}>
              {logColumns.map((column, index) => (
                <TableCell
                  key={index}
                  align="center"
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((log, index) => {
              return (
                <TableRowStyled key={index}>
                  <TableCellStyled>{index + 1}</TableCellStyled>
                  <TableCellStyled>{log.player}</TableCellStyled>
                  <TableCellStyled>{log.log}</TableCellStyled>
                </TableRowStyled>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default GamePlayLog;
