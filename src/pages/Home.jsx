import React from 'react'
import '../App.css';
import { Link } from 'react-router';
const Home = () => {
  return (
    <>
      <div className='a'>
        <section id='b'>
          Dashboard
          
          <section id='k'><i class="fa-brands fa-react" ></i> Investment</section>
  <section id='k'><i class="fa-regular fa-chart-bar" ></i> Analysis</section>
  <section id='k'><i class="fa-regular fa-user" ></i><Link to="/signup" className="custom-link"> Admin/HR</Link></section>
  <section id='k'><i class="fa-solid fa-chart-line" ></i> Sales</section>
  <section id='k'><i class="fa-regular fa-handshake" ></i> Product</section>
  <section id='k'><i class="fa-solid fa-coins" ></i>  <Link to="/trans" className="custom-link">Transition</Link></section>
        </section>
        <section id='c' >2
         
        </section>
        <section id='d'>3</section>
      </div>
    </>
  )
}

export default Home;

