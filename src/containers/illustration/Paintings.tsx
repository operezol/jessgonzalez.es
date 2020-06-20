import * as React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import LanguageSelector from "../../components/LanguageSelector";
export default class Paintings extends React.Component {
    public render(){
        return (
            <>
      <Header />
      <Footer />
      <Menu />
      <LanguageSelector />
    </>
        )
    }
}