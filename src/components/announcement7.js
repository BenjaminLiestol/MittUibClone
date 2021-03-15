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
import Button from "@material-ui/core/Button";

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

const teach = [
  createData(
    "Professor # 1",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  ),
  createData(
    "Seminar Leader # 1",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  ),
  createData(
    "Professor # 1",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  ),
];

export default function Announcement7() {
  const classes = useStyles();
  return (
    <div class="outerdiv">
      <Grid container justify="center">
        <Grid item xs="10">
          <h1>
            <b>Course 107</b>
          </h1>
        </Grid>
        <Grid item xs="2">
          <Button variant="contained" color="secondary" a href="/course107">
            Back to course
          </Button>
        </Grid>

        <Grid item xs="8" className={classes.important}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Announcers</TableCell>
                  <TableCell align="center">Announcement</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teach.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.topic}
                    </TableCell>
                    <TableCell align="center">{row.lecture}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
