import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'
import Help from './Widgets/Help/Help'
import  Options  from './Widgets/Options/Options'

const config = {
  botName: 'Funkommerce',
  customComponents: {
    header: () => (
      <div
        style = {{ color: 'white', backgroundColor: '#1F618D', padding: '5px', borderRadius: '3px' }}>
        Chat de ayuda
      </div>
    ),
  },
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#1F618D",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#1F618D",
    },
  },
  initialMessages: [createChatBotMessage("Welcome to DeViaje.com. Ask me a question!", {
    widget: "options",
  })
],
widgets: [
  {
    widgetName: "options",
    widgetFunc: (props) => <Options {...props} />,
    },
  
  {
    widgetName: "help",
    widgetFunc: (props) => <Help {...props} />,
    },
  ],


}

export default config