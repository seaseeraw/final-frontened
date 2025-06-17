import React from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button';
const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='box'><h1>Welcome to the Home Page</h1></div>
      <div className='box'><p>This is the home page of our website.</p><br/><Button variant="success">Success</Button></div>
      <div className='box'><p>Here you can find various resources and information.</p></div>
    </div>
    </>
  
  )
}

export default Home;