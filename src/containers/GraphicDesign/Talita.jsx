import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
export default class Talita extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Menu />
        <h1>TALITA</h1>
        <Footer />
      </>
    );
  }
}
