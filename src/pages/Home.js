import React from 'react'
import Header from '../components/Header'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header />
      <h1>I am Home</h1>
      <NavLink to={'/page1'}>Page 1</NavLink>
      <NavLink to={'/page2'}>Page 2</NavLink>
      <Outlet />
    </div>
  )
}

export default Home