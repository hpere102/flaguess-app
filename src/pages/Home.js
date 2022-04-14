import React from 'react';
import { Link } from 'react-router-dom';











const Start = () => {

    return (
      <main className="home-cont">
      
      <div className="home-title">
          Welcome to Flaguess. Ready to play?
      </div>
     <div>
         <Link to="/guess-the-flag"><button className="start-btn">START</button></Link>
     </div>

  </main>
  
    );
  };
  
  export default Start;