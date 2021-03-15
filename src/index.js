import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import MediaCard from "./components/Classes";
import Cor1001 from "./components/cor101";
import Cor1002 from "./components/cor102";
import Cor1003 from "./components/cor103";
import Cor1004 from "./components/cor104";
import Cor1005 from "./components/cor105";
import Cor1006 from "./components/cor106";
import Cor1007 from "./components/cor107";
import Cor1008 from "./components/cor108";
import Cor1009 from "./components/cor109";
import Assignment1 from "./components/assignment1";
import Assignment2 from "./components/assignment2";
import Assignment3 from "./components/assignment3";
import Assignment4 from "./components/assignment4";
import Assignment5 from "./components/assignment5";
import Assignment6 from "./components/assignment6";
import Assignment7 from "./components/assignment7";
import Assignment8 from "./components/assignment8";
import Assignment9 from "./components/assignment9";
import Announcement1 from "./components/announcement1";
import Announcement2 from "./components/announcement2";
import Announcement3 from "./components/announcement3";
import Announcement4 from "./components/announcement4";
import Announcement5 from "./components/announcement5";
import Announcement6 from "./components/announcement6";
import Announcement7 from "./components/announcement7";
import Announcement8 from "./components/announcement8";
import Announcement9 from "./components/announcement9";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path="/" exact render={() => <MediaCard />} ></Route>
        <Route path="/course101" exact render={() => <Cor1001 />} ></Route>
        <Route path="/course102" exact render={() => <Cor1002 />} ></Route>
        <Route path="/course103" exact render={() => <Cor1003 />} ></Route>
        <Route path="/course104" exact render={() => <Cor1004 />} ></Route>
        <Route path="/course105" exact render={() => <Cor1005 />} ></Route>
        <Route path="/course106" exact render={() => <Cor1006 />} ></Route>
        <Route path="/course107" exact render={() => <Cor1007 />} ></Route>
        <Route path="/course108" exact render={() => <Cor1008 />} ></Route>
        <Route path="/course109" exact render={() => <Cor1009 />} ></Route>
        <Route path="/announcement1" exact render={() => <Announcement1 />} ></Route>
        <Route path="/announcement2" exact render={() => <Announcement2 />} ></Route>
        <Route path="/announcement3" exact render={() => <Announcement3 />} ></Route>
        <Route path="/announcement4" exact render={() => <Announcement4 />} ></Route>
        <Route path="/announcement5" exact render={() => <Announcement5 />} ></Route>
        <Route path="/announcement6" exact render={() => <Announcement6 />} ></Route>
        <Route path="/announcement7" exact render={() => <Announcement7 />} ></Route>
        <Route path="/announcement8" exact render={() => <Announcement8 />} ></Route>
        <Route path="/announcement9" exact render={() => <Announcement9 />} ></Route>
        <Route path="/assignment1" exact render={() => <Assignment1 />} ></Route>
        <Route path="/assignment2" exact render={() => <Assignment2 />} ></Route>
        <Route path="/assignment3" exact render={() => <Assignment3 />} ></Route>
        <Route path="/assignment4" exact render={() => <Assignment4 />} ></Route>
        <Route path="/assignment5" exact render={() => <Assignment5 />} ></Route>
        <Route path="/assignment6" exact render={() => <Assignment6 />} ></Route>
        <Route path="/assignment7" exact render={() => <Assignment7 />} ></Route>
        <Route path="/assignment8" exact render={() => <Assignment8 />} ></Route>
        <Route path="/assignment9" exact render={() => <Assignment9 />} ></Route>
        <Route component={MediaCard} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
