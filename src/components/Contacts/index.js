import Layout from '../Layout';
import Sidebar from '../Sidebar';
import './style.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'
import { useRef } from 'react'

const Contacts = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        return(
        setLetterClass("text-animate-hover") )
    }, [])  
    return (
        <>
        <div className='contact-page'>
        <div className="div-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in different opportunities - especially ambitious or
            large projects.<br/> However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p> 
          </div> 
          
          
          
        <div className='contact-form'>
        <form class="form" id="form1">
      
      <p class="name">
        <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
      </p>
      
      <p class="email">
        <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
      </p>
      
      <p class="text">
        <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
      </p>
      
      
      <div class="submit">
        <input type="submit" value="SEND" id="button-blue"/>
        <div class="ease"></div>
      </div>
    </form>
    </div>
    </div>
    </>
    )
}

export default Contacts