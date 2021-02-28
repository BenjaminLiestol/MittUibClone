import React from "react";
import "./App.css";
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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/mitt-uib-clone">{MediaCard()}</Route>
        <Route path="/course101"> {Cor1001()}</Route>
        <Route path="/course102" exact component={Cor1002} />
        <Route path="/course103" exact component={Cor1003} />
        <Route path="/course104" exact component={Cor1004} />
        <Route path="/course105" exact component={Cor1005} />
        <Route path="/course106" exact component={Cor1006} />
        <Route path="/course107" exact component={Cor1007} />
        <Route path="/course108" exact component={Cor1008} />
        <Route path="/course109" exact component={Cor1009} />
      </Switch>
    </Router>
  );
}
