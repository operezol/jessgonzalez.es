import * as React from "react"
import { Link } from "react-router-dom"
import HamburguerIcon from '../resources/mobile/HamburguerIcon.svg'

export default class Menu extends React.Component {
  public render() {
    return (
      <>
        <button><img src={HamburguerIcon} width="50px" alt=""/></button>
        <Link to="./illustration">Illustration</Link>
        <Link to="./graphic-design">Graphic Design</Link>
        <Link to="./about">About me</Link>
      </>
    )
  }
}
