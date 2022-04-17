import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa' 
import {FiUsers} from 'react-icons/fi' 
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Saiba Mais</h5>
      <h2>Sobre Mim</h2>

      <div className="container about__container">
        <div className="about__me">

          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>3+ Anos no Mercado</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>200+ Clientes</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>80+ Projetos</small>
            </article>

          </div>

          <p>
            It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. The point of using 
            Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here', making it look like 
            readable English.
          </p>

          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>

        </div>
      </div>
    </section>
  )
}

export default About