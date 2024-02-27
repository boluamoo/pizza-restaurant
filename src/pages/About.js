import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi temporibus, nisi et voluptates, fuga ipsam assumenda odit, magnam quis expedita animi culpa excepturi ex eos fugit facilis incidunt sint provident nesciunt distinctio similique enim repellat nihil! Obcaecati minima tempore, molestias iste ducimus aut in esse voluptatibus asperiores repellat rem.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi temporibus, nisi et voluptates, fuga ipsam assumenda odit, magnam quis expedita animi culpa excepturi ex eos fugit facilis incidunt sint provident nesciunt distinctio similique enim repellat nihil! Obcaecati minima tempore, molestias iste ducimus aut in esse voluptatibus asperiores repellat rem.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi temporibus, nisi et voluptates, fuga ipsam assumenda odit, magnam quis expedita animi culpa excepturi ex eos fugit facilis incidunt sint provident nesciunt distinctio similique enim repellat nihil! Obcaecati minima tempore, molestias iste ducimus aut in esse voluptatibus asperiores repellat rem.</p>
      </div>
    </div>
  )
}

export default About
