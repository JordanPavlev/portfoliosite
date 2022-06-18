import AnimatedLetters from '../AnimatedLetters'
import './style.scss'
import { 
    faCss3,
    faGitAlt,
    faGithub,
    faHtml5,
    faJsSquare,
    faReact} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const aboutArr = ['A','b','o','u','t',' ','m','e'];

    useEffect(() => {
        return(
        setLetterClass("text-animate-hover") )
    }, [])
    return (
    

        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={aboutArr}
                    index={15}
                    />
                </h1>
                
                
                <p>
                I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.<br/>
                
                
                I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.<br/>
                
                
                If I need to define myself in one sentence that would be a family
            person, owner of a beautiful husky, a sports fanatic,
            car person, and tech-obsessed!!!
                </p>
                </div>
                <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGithub} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
                </div>
            
        
    )
}

export default About