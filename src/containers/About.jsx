import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
export default class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h1>About</h1>
        <Menu />
        <Footer />
      </>
    );
  }
}
