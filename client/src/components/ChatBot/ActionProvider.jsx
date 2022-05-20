class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage
      this.setState = setStateFunc
    }

empty = ()=> {
    const message = this.createChatBotMessage('Please write a question or select an option.')
    this.addMessageToState(message)
}
hello = ()  => {
  const message = this.createChatBotMessage('Hi!  What can I do for you?')
  this.addMessageToState(message)
}


register = () => {
  const message = this.createChatBotMessage("To register go to the top left corner of the page and push the register button and complete the required fields")
  this.addMessageToState(message)
}

login = () => {
  const message = this.createChatBotMessage("To login go to the top left corner of the page and push the login button and complete the required fields")
  this.addMessageToState(message)
}

flight = ()=> {
  const message = this.createChatBotMessage('if you want to know about flights please select a destination and check the availability of the same')
  this.addMessageToState(message)
}

offer = () => {
  const message = this.createChatBotMessage(<div><p>If you want to know more about our top offers, check them out</p><a href='https://deviaje-com.vercel.app/top'>here</a></div>)
  this.addMessageToState(message)
}

handleBuy = () => {
  const message = this.createChatBotMessage("1- Select your origin city and destination city 2- Add the date you wish to flight and return 3- Check the availability of flights 4- Complete the payment method")
  this.addMessageToState(message)
}

handlePayment = () => {
  const message = this.createChatBotMessage("At this moment we only work with Credit Cards")
  this.addMessageToState(message)
}

handleHelp = () => {
  const message = this.createChatBotMessage('What kind of help do you need?', {widget: 'help'})
  this.addMessageToState(message)
}

handleAboutUs = () => {
  const message = this.createChatBotMessage(<div><p>If you want to know more about us</p><a href='https://deviaje-com.vercel.app/about'>Click Here</a></div>) 
  this.addMessageToState(message)
}

handleHenry = () => {
  const message = this.createChatBotMessage(<div><p>To know about the academy</p><a href='https://www.soyhenry.com/'>Visit Henry</a></div>)
  this.addMessageToState(message)
}

handleOther = () => {
  const message = this.createChatBotMessage(<div><p>Do you want to know how to do a chat?</p><a href='https://fredrikoseberg.github.io/react-chatbot-kit-docs/'>Check here</a></div>)
  this.addMessageToState(message)
}


addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }))
  }
}


export default ActionProvider