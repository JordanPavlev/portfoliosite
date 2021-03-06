
import { Link } from 'react-router-dom'
import './style.scss'
import React, { useEffect } from 'react'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ','J', 'o','r','d','a','n'];
    const jobArray = ['w','e','b','-','d','e','v','e','l','o','p','e','r'];

    useEffect(() => {
      return(
      setLetterClass("text-animate-hover") )
  }, [])  
    return(
            <div className='container home-page'>
             <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i, </span>

                <br/> 

                <span className={`${letterClass} _13`}>i</span>
                <span className={`${letterClass} _14`}>'m</span>

                 <AnimatedLetters letterClass={letterClass}
                 strArray={nameArray}
                 index={15}/>

                  <br/> <AnimatedLetters letterClass={letterClass}
                 strArray={jobArray}
                 index={21}/></h1>
                <h2>Frontend Developer/ Java Script Programmer / React enthusiast</h2>
                <Link to="/contacts" className='contact-btn'>CONTACT ME</Link>
              </div>
                
             </div>
        
        
             )
    
}

export default Home