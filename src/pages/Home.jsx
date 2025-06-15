import React,{useState} from 'react';
import '../App.css';
import Footers from './footer';
import { useEffect } from 'react';
const Home = () => {
  const [data, setData] =useState([]);
  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch('/a.json')
      const result = await response.json();
      setData(result);
      console.log(result);
    };
    fetchData();
  },[]);
  return (
  <>   
  <div className='home'>
        <div><h1>Sayings</h1>
        {data.map((item, index)=>(
          <p key={index}>"{item.quote}" - {item.author}</p>
        ))}
        </div>
        <div><img src="./src/assets/tiger.jpg" alt="Placeholder" /></div>
        {/* <div><Footers/></div> */}
    </div>
  <div><Footers/></div>
  
  </>
  
  
 
   
  )
}

export default Home;