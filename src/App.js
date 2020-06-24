import * as React from "react";
import Home from "./containers/Home";
import { Route, Switch } from "react-router-dom";
import Illustration from "./containers/illustration/Illustration";
import Drawings from "./containers/illustration/Drawings";
import Paintings from "./containers/illustration/Paintings";
import Digital from "./containers/illustration/Digital";
import GraficDesign from "./containers/GraphicDesign/GraphicDesign";
import Ekotarriko from "./containers/GraphicDesign/Ekotarriko";
import Fisioesthetic from "./containers/GraphicDesign/Fisioesthetic";
import Logos from "./containers/GraphicDesign/Logos";
import Talita from "./containers/GraphicDesign/Talita";
import About from "./containers/About";

function App() {
  return (
    <Switch>
      <Route path="/illustration/drawings">
        <Drawings />
      </Route>
      <Route path="/illustration/paintings">
        <Paintings />
      </Route>
      <Route path="/illustration/digital">
        <Digital />
      </Route>
      <Route path="/illustration">
        <Illustration />
      </Route>
      <Route path="/graphic-design/ekotarriko">
        <Ekotarriko />
      </Route>
      <Route path="/graphic-design/fisioesthetic">
        <Fisioesthetic />
      </Route>
      <Route path="/graphic-design/logos">
        <Logos />
      </Route>
      <Route path="/graphic-design/talita">
        <Talita />
      </Route>
      <Route path="/graphic-design">
        <GraficDesign />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
