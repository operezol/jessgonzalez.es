import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Illustration from "./containers/illustration";
import Drawings from "./containers/illustration/Drawings";
import Paintings from "./containers/illustration/Paintings";
import Digital from "./containers/illustration/Digital";
import GraficDesign from "./containers/GraphicDesign";
import Ekotarriko from "./containers/GraphicDesign/Ekotarriko";
import Fisioesthetic from "./containers/GraphicDesign/Fisioesthetic";
import Logos from "./containers/GraphicDesign/Logos";
import Talita from "./containers/GraphicDesign/Talita";
import About from "./containers/About";

function App() {
  const [lang, setLang] = React.useState(
    (navigator.language || navigator.userLanguage).substring(0, 2)
  );

  return (
    <Switch>
      <Route path="/illustration/drawings">
        <Drawings lang={lang}/>
      </Route>
      <Route path="/illustration/paintings">
        <Paintings lang={lang}/>
      </Route>
      <Route path="/illustration/digital">
        <Digital lang={lang}/>
      </Route>
      <Route path="/illustration">
        <Illustration lang={lang}/>
      </Route>
      <Route path="/graphic-design/ekotarriko">
        <Ekotarriko lang={lang}/>
      </Route>
      <Route path="/graphic-design/fisioesthetic">
        <Fisioesthetic lang={lang}/>
      </Route>
      <Route path="/graphic-design/logos">
        <Logos lang={lang}/>
      </Route>
      <Route path="/graphic-design/talita">
        <Talita lang={lang}/>
      </Route>
      <Route path="/graphic-design">
        <GraficDesign lang={lang}/>
      </Route>
      <Route path="/about">
        <About lang={lang}/>
      </Route>
      <Route path="/">
        <Home lang={lang} setLang={setLang} />
      </Route>
    </Switch>
  )
}

export default App;
