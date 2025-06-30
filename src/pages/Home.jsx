// import React from 'react'

import React, { useState } from 'react';
import '../App.css';

const Home = () => {
  const[message, setmessage]=useState("Hello World");
  const handleOnClick = () => {
    setmessage("Button clicked!");
  };

  return (
    <>
      <div className='a'>
        <section id='b'>
          Dashboard
          <ul>
            <li onClick={handleOnClick}>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </section>

        <section id='c'>{message}</section>
      </div>
    </>
  );
};

export default Home;

// import '../App.css';
// const Home = () => {
//   return (
    
//     <>
//     const handleOnClick = () => {
//   console.log("Button clicked!");
// };

//     <div className='a'>
//       <section id='b'>Dashboard
//         <li>Item 1 {Home}</li>
//         <li>Item 2 </li>
//         <li>Item 3 </li>
//       </section>
//       <section id='c'>World</section>
      
//     </div>

   
//     </>
//   )
// }

// export default Home;