import React, { useState } from 'react'
import Chatbot from 'react-chatbot-kit'
import config from '../config'
import ActionProvider from '../ActionProvider'
import MessageParser from '../MessageParser'
import roboto from './roboto.png'
import './Chatbot-btn.css'

function Button() {
    return (
      <div>        
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />        
      </div>
    )
  }

  function ChatbotBtn() {
    let [click, setClick] = useState(false)
  
    let handleClick = (e) => {
      setClick(!click)
  
       if(click){
        document.getElementById('roboto').classList.remove('btn-no-round') 
      } else{
         document.getElementById('roboto').classList.add('btn-no-round')
       }
     }
     return (
        <div>
        <div className = 'container-chatbot'>
        <button id ='roboto' className="btn-chat" onClick ={handleClick}>
        <img className='img-chat' src={roboto} alt="" />
        </button>
            {click ? <Button /> : null}
        </div> 
        
      </div>   
     )

    }    
    export default ChatbotBtn