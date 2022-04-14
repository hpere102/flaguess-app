import React from 'react';



import { useEffect, useState} from "react"
import countries from '../utils/countryData'





 
  const randomIndex = Math.floor(Math.random()*countries.length);
  const objCountry = countries[randomIndex]
  const randomCountry = objCountry.name
  

  let url = 'https://restcountries.com/v3.1/name/' + randomCountry

 

  








const Start = () => {

  const [countryData, setUsers] = useState();
  const [search, setSearch] = useState([""]);
  const [characterCount, setCharacterCount] = useState(0);
  const [spinner, setSpinner] = useState(false); 
  const [list] = useState();
  const [seconds, setSeconds] = React.useState(15);
  const [correctAnswer, setAnswer] = useState(false); 

  const handleChange = event => {

    if (event.target.value.length <= 280) {
      setSearch(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };


  const fetchData = () => {
    setSpinner(true);
    fetch(url)
      .then(response => {
        return response.json( )
      })
      .then(data => {
        setUsers(data)
        setSpinner(false);
      })

      
  }


  useEffect(() => {
    fetchData() 
  },[])

  const renderDiv = function() {
    if (characterCount >= 1) {
    return  `flex` 
    } 
}



  if (search === randomCountry || search === randomCountry.charAt(0).toLowerCase() + randomCountry.slice(1)) {
   console.log("CORRECT")
   setTimeout(function() {
    window.location.reload(false);
  }, 1000);
  };

  const renderCorrect = function() {
    if (search === randomCountry || search === randomCountry.charAt(0).toLowerCase() + randomCountry.slice(1)) {
    return  `flex` 
    } 
}

const handleChange2 = event => {

  if (event.target.value.length <= 280) {
    setSearch(event.target.value);
    console.log(event.target.value)
    
    
  }
};

        const countryFlag = countryData && countryData[0].flags.png
        console.log()
        
        const rightAnswer = function() {
          setAnswer(true);
          setTimeout(function() {
            window.location.reload(false);
          }, 3000);
        }

        React.useEffect(() => {
          if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
          } else {
            setSeconds(rightAnswer(),seconds);
          }
        });
 
 
    return (
      <main className="start-cont">
    
      <div className="timer">
      ⏱️ {seconds}
      </div>

      <div>
      
      {spinner ? <h2 className="loader"></h2> : <img alt="avi" className="flag"  src={countryFlag} /> }
      </div>
      <div style={{display: renderCorrect() }} className='correct'>
          Correct
        </div>
      {correctAnswer && <div>The correct answer is <span>{randomCountry}</span></div> }
      
      <div>
        
      <input
      
       placeholder=" country name..."
       value={search}
       className="form-input col-12 col-md-9"
       onChange={handleChange}
       autoFocus
      ></input>
      </div>

      
      {countries.filter((data)=> {
       if (search === "") {
         return true
        } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
          return true
        } 
      
     }).map((data) => {
       return (
         

    
        <div style={{display: renderDiv() }} className='country-list-cont' key={data.id}>
          
        <option onClick={handleChange2} value={list} className="list-item"> {data.name} </option> 
  
        </div>
        
        
      
       )
     })}

       
      
  </main>
  
    );
  };
  
  export default Start;