import * as React from 'react'
import JessGonzalez from '../../resources/JessGonzalez.svg'
import Menu from '../Menu';
function Header  ({lang}) {
  return (
    <>
      <img src={JessGonzalez} width="200" alt=""/>
      <Menu lang={lang}/>
    </>
  )
}
export default Header