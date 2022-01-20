import {
  Container,
  Paper,
  Typography,
  List,
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

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
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 450,
  },
  tableHeader: {
    backgroundColor: "black",
  },
  table: {
    minWidth: 200,
  },
});

const logColumns = [
  { id: "Player", label: "Player", minWidth: 40 },
  { id: "Action", label: "Action", minWidth: 200 },
];

// function createData(name, log) {
//   return { name, log };
// }

const GamePlayLog = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const history = useSelector((state) => state.history.gameHistory);
  console.log(history);

  return (
    <Paper>
      <TableContainer className={classes.container}>
        
        <Table className={classes.table} size="small" aria-label="sticky table">
        <caption>Log for recording player actions</caption>
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
                  <TableCellStyled>{log.player}</TableCellStyled>
                  <TableCellStyled>{log.log}</TableCellStyled>
                  {/* {logColumns.map((i) => {
                    return <TableCellStyled>{log[i]}</TableCellStyled>;
                  })} */}
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

{
  /* {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rows.id}>
                    {logColumns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })} */
}

// <Paper className={classes.root}>

{
  /* </Paper> */
}

{
  /* <TablePagination
rowsPerPageOptions={[5, 10]}
component="div"
count={history.length}
rowsPerPage={rowsPerPage}
page={page}
onPageChange={handleChangePage}
onRowsPerPageChange={handleChangeRowsPerPage}
/> */
}
