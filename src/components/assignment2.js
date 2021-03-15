import "./assignments.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 650,
  },
  media: {
    height: 140,
  },
  fullgrid: {
    paddingLeft: 150,
    paddingTop: 10,
  },
  semigrid: {
    paddingTop: 1,
    maxwidth: "80wv",
  },
  row: {
    paddingBottom: 30,
  },
  important: {
      paddingBottom: 30,
  },
  header: {
      paddingRight: "10vw",
  },
});

function createData(topic: string, lecture: string, seminar: string) {
  return { topic, lecture, seminar };
}

const rows = [
  createData("Assignment # 1", "29th of January", "14th of February"),
  createData("Assignment # 2", "10th of February", "28th of January"),
  createData("Assignment # 3", "20th of February", "3rd of March"),
  createData("Assignment # 4", "20th of March", "3rd of April"),
  createData("Assignment # 5", "10th of April", "20th of April"),
];

const teach = [
  createData("Group Assignment Part 1", "5th of April"),
  createData("Group Assignment Final Version", "5th of May"),
  createData("Examination", "10th of June"),
];

export default function Assignment2() {
  const classes = useStyles();
  return (
    <div class="outerdiv">
      <Grid container justify="center">
          <Grid item xs="10">
        <h1><b>Course 102</b></h1>
        </Grid>
        <Grid item xs="2">
        <Button variant="contained" color="secondary"a href="/course102">Back to course</Button>
        </Grid>
        
        <Grid item xs="8" className={classes.important}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell >Important Tasks</TableCell>
                  <TableCell align="center">Dates</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teach.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell  component="th" scope="row">
                      {row.topic}
                    </TableCell>
                    <TableCell align="center">{row.lecture}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid container justify="center">
        <Grid item xs="8" className={classes.semigrid}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Assignment Name</TableCell>
                  <TableCell align="center">Due Date</TableCell>
                  <TableCell align="center">Resubmission</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.topic}
                    </TableCell>
                    <TableCell align="center">{row.lecture}</TableCell>
                    <TableCell align="center">{row.seminar}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        </Grid>
        <Grid container justify="left">
        <Grid item xs="12">
        
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
