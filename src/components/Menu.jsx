import * as React from "react"
import { Link } from "react-router-dom"
import HamburguerIcon from '../resources/mobile/HamburguerIcon.svg'
import CloseIcon from '../resources/mobile/CloseIcon.svg'
import LanguageSelector from "./LanguageSelector"

export default class Menu extends React.Component {
  render() {
    return (
      <>
        <button><img src={HamburguerIcon} width="50px" alt=""/></button>
        <button><img src={CloseIcon} width="50px" alt=""/></button>
        <LanguageSelector />
        <Link to="/illustration">Illustration</Link>
        <Link to="/graphic-design">Graphic Design</Link>
        <Link to="/about">About me</Link>
      </>
    )
  }
}
