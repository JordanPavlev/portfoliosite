import Logo from '../../assets/images/slogo.png'
import { Link } from 'react-router-dom'
import './style.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['J', 'o','r','d','a','n'];
    const jobArray = ['w','e','b','','d','e','v','e','l','o','p','e','r'];
    return(
            <div className='container'>
             <div className='div-text'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>

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
                <Link to="/contact" className='contact-btn'>CONTACT ME</Link>
             </div>
             </div>
            
    )
    
}

export default Home