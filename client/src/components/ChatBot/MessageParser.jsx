class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {

    const lowercase = message.toLowerCase();
    if (!lowercase) {this.actionProvider.empty()}

    if (lowercase.includes('hola') || lowercase.includes('hi') || lowercase.includes('hello')){this.actionProvider.hello()}
        
    if (lowercase.includes('registrarse') || lowercase.includes('registro') || lowercase.includes('register')){this.actionProvider.register()} 
    
    if (lowercase.includes('login')){this.actionProvider.login()}

    if(lowercase.includes('comprar') || lowercase.includes('compra') ||lowercase.includes('buy')){this.actionProvider.handleBuy()}
    
    if(lowercase.includes('pago') || lowercase.includes('pagar') ||lowercase.includes('payment')){this.actionProvider.handlePayment()}    

    if (lowercase.includes('help')){this.actionProvider.handleHelp()}
    
    if (lowercase.includes('vuelo') || lowercase.includes('vuelos') ||lowercase.includes('flight') || lowercase.includes('flights')){this.actionProvider.flight()}

    if (lowercase.includes('ofertas') || lowercase.includes('offers')){this.actionProvider.offer()}


    }
}


export default MessageParser;