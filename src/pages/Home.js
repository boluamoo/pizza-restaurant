import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import BannerImage from '../assets/pizza.jpeg'

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Bolu's Pizzeria</h1>
        <p>PIZZA FOR ANY TASTE</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
