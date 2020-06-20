import * as React from "react"
import { Link } from "react-router-dom"

export default class Menu extends React.Component {
  public render() {
    return (
      <>
        <Link to="./illustration">Illustration</Link>
        <Link to="./graphic-design">Graphic Design</Link>
        <Link to="./about">About me</Link>
      </>
    )
  }
}
