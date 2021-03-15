import "./Classes.css";
import { NavLink } from "react-router-dom";
import Cor101 from "./Images/cor101.jpg";
import Cor102 from "./Images/cor102.jpeg";
import Cor103 from "./Images/cor103.jpeg";
import Cor104 from "./Images/cor104.jpeg";
import Cor105 from "./Images/cor105.jpeg";
import Cor106 from "./Images/cor106.jpeg";
import Cor107 from "./Images/cor107.jpeg";
import Cor108 from "./Images/cor108.jpeg";
import Cor109 from "./Images/cor109.jpeg";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import FolderIcon from "@material-ui/icons/Folder";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 100,
  },
  fullgrid: {
    paddingLeft: 100,
  },
  row: {
    paddingBottom: 30,
    paddingRight: 20,
  },
  card: {
    paddingRight: 50,
  },
  footer: {
    paddingLeft: 50,
    paddingRight: 50,
  },
});

function createData(course: string, lecture: string, seminar: string) {
  return { course, lecture, seminar };
}

const rows = [
  createData("Course 102", "Monday - 12.15", "Friday - 10.15"),
  createData("Course 103", "Monday - 14.15", "Thursday - 14.15"),
  createData("Course 108", "Tuesday 08.15", "Wednesday - 10.15"),
];

export default function MediaCard() {
  const classes = useStyles();
  return (
    <div class="outerdiv">
      <Grid container>
        <Grid item xs="8" className={classes.fullgrid}>
          <Grid container>
            <Grid item xs="4" className={classes.row}>
              <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={Cor101}
                      title="Course 101"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Cor 101 - Course 1
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        component="p"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                  <NavLink exact to="/penisannouncement1" className={classes.link}>
                    <IconButton>
                      <AnnouncementIcon />
                    </IconButton>
                  </NavLink>
                  <IconButton a href="/assignment1">
                    <AssignmentLateIcon />
                  </IconButton>
                  <IconButton>
                    <FolderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs="4" className={classes.row}>
              <Card className={classes.root}>
                <CardActionArea a href="/course102">
                  <CardMedia
                    className={classes.media}
                    image={Cor102}
                    title="Course 102"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cor 102 - Course 2
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton a href="/announcement2">
                    <AnnouncementIcon />
                  </IconButton>
                  <IconButton a href="/assignment2">
                    <AssignmentLateIcon />
                  </IconButton>
                  <IconButton>
                    <FolderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs="4">
              <Card className={classes.root}>
                <CardActionArea href="/course103">
                  <CardMedia
                    className={classes.media}
                    image={Cor103}
                    title="Course 3"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cor 103 - Course 3
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton a href="/announcement3">
                    <AnnouncementIcon />
                  </IconButton>
                  <IconButton a href="/assignment3">
                    <AssignmentLateIcon />
                  </IconButton>
                  <IconButton>
                    <FolderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs="4" className={classes.row}>
              <Card className={classes.root}>
                <CardActionArea href="/course104">
                  <CardMedia
                    className={classes.media}
                    image={Cor104}
                    title="Course 4"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cor 104 - Course 4
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton a href="/announcement4">
                    <AnnouncementIcon />
                  </IconButton>
                  <IconButton a href="/assignment4">
                    <AssignmentLateIcon />
                  </IconButton>
                  <IconButton>
                    <FolderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs="4" className={classes.row}>
              <Card className={classes.root}>
                <CardActionArea href="/course105">
                  <CardMedia
                    className={classes.media}
                    image={Cor105}
                    title="Course 5"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cor 105 - Course 5
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton a href="/announcement5">
                    <AnnouncementIcon />
                  </IconButton>
                  <IconButton a href="/assignment5">
                    <AssignmentLateIcon />
                  </IconButton>
                  <IconButton>
                    <FolderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs="4">
              <Card className={classes.root}>
                <CardActionArea href="/course106">
                  <CardMedia
                    className={classes.media}
                    image={Cor106}
                    title="Course 106"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cor 106 - Course 6
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton a href="/announcement6">
                    <AnnouncementIcon />
                  </IconButton>
                  <IconButton a href="/assignment6">
                    <AssignmentLateIcon />
                  </IconButton>
                  <IconButton>
                    <FolderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs="4" className={classes.row}>
              <Card className={classes.root}>
                <CardActionArea href="/course107">
                  <CardMedia
                    className={classes.media}
                    image={Cor107}
                    title="Coourse 7"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cor 107 - Course 7
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton a href="/announcement7">
                    <AnnouncementIcon />
                  </IconButton>
                  <IconButton a href="/assignment7">
                    <AssignmentLateIcon />
                  </IconButton>
                  <IconButton>
                    <FolderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs="4" className={classes.row}>
              <Card className={classes.root}>
                <CardActionArea href="/course108">
                  <CardMedia
                    className={classes.media}
                    image={Cor108}
                    title="Course 8"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cor 108 - Course 8
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton a href="/announcement8">
                    <AnnouncementIcon />
                  </IconButton>
                  <IconButton a href="/assignment8">
                    <AssignmentLateIcon />
                  </IconButton>
                  <IconButton>
                    <FolderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs="4">
              <Card className={classes.root}>
                <CardActionArea href="/course109">
                  <CardMedia
                    className={classes.media}
                    image={Cor109}
                    title="Course 9"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cor 109 - Course 9
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton a href="/announcement9">
                    <AnnouncementIcon />
                  </IconButton>
                  <IconButton a href="/assignment9">
                    <AssignmentLateIcon />
                  </IconButton>
                  <IconButton>
                    <FolderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs="4" className={classes.footer}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Course Name</TableCell>
                  <TableCell align="right">Next Lecture</TableCell>
                  <TableCell align="right">Next Seminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.course}
                    </TableCell>
                    <TableCell align="right">{row.lecture}</TableCell>
                    <TableCell align="right">{row.seminar}</TableCell>
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
