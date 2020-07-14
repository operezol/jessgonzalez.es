import React from "react";
import ReactDOM from "react-dom";
import 'reset-css';
import "./index.css";
import App from "./App";
import SimpleReactLightbox from "simple-react-lightbox";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
