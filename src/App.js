import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Following from "./Component/Following/Following";
import Answer from "./Component/Answer/Answer";
import Spaces from "./Component/Spaces/Spaces";
import Notification from "./Component/Notification/Notification";
import Navbar from "./Component/Home/Navbar";

export default function App() {
  return (
    <div>
      <Route path="/" component={Navbar} />
      <Route path="/following" component={Following} />
      <Route path="/answer" component={Answer} />
      <Route path="/spaces" component={Spaces} />
      <Route path="/notification" component={Notification} />
    </div>
  );
}
