import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, Eu sou</h5>
        <h1>Gabriel Dantas</h1>
        <h5 class="text-light">Desenvolvedor Web</h5>
        <CTA/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header