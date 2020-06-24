import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
export default class Digital extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Menu />
        <h1>DIGITAL</h1>
        <Footer />
      </>
    );
  }
}
