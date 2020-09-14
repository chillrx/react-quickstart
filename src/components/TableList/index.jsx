import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { TableContainer } from "./styles";
import { IconButton } from "@material-ui/core";

const TableList = ({ rows, columns }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Table">
        <TableHead>
          <TableRow>
            {
              columns.map((column) => (
                <TableCell key={`${column.key}${column.title}`} align="left">{column.title || 'Here here'}</TableCell>
              ))
            }

            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={`${row.name}${i}`}>
              {
                columns.map((column, j) => (
                  <TableCell component="th" align="left" scope="row" key={`${column.key}${j}`}>
                    {row[column.key]}
                  </TableCell>
                ))
              }

              <TableCell align="right">
                <IconButton>
                  <EditIcon />
                </IconButton>

                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
