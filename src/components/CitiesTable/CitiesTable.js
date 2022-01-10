import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Checkbox from "@material-ui/core/Checkbox";
import { Box } from "@material-ui/core";
import './CitiesTable.scss';

/**
 * Represents a CitiesTable component
 * Component rendering Cities Table consists of City name, it's AQI and when it was last updated
 * @method
 * @param {object} props - React properties passed from composition
 * @returns CitiesTable
 */

const CitiesTable = (props) => {

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"></TableCell>
              <TableCell align="center">City</TableCell>
              <TableCell align="center">Current AQI</TableCell>
              <TableCell align="center">Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.cityData.map((row, index) => (
              <TableRow
                key={index}
                className={classNames(`Aqi`, {
                  ...(row.data[row.data.length - 1].status && {
                    [`Aqi--${row.data[row.data.length - 1].status}`]:
                      row.data[row.data.length - 1].status,
                  }),
                })}
                onClick={() => props.handleOpen(index)}
              >
                <TableCell className="selectCheckbox" padding="checkbox">
                  <Checkbox
                    onClick={(event) => props.handleCheckboxClick(event, index)}
                    className="selectCheckbox"
                  />
                </TableCell>
                <TableCell align="center">{row.city}</TableCell>
                <TableCell align="center">
                  {(
                    Math.round(row.data[row.data.length - 1].aqi * 100) / 100
                  ).toFixed(2)}
                </TableCell>

                <TableCell align="center">
                  {formatDistanceToNow(
                    new Date(row.data[row.data.length - 1].time),
                    {
                      addSuffix: true,
                    }
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CitiesTable;
