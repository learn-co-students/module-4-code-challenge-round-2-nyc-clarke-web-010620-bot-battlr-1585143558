import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    bots: []
  }

  componentDidMount (){
    fetch('http://localhost:6001/bots')
    .then(r=>r.json())
    .then(bots => {
      this.setState({
        bots: bots
      })
    })
  }

  addToBotPage = (id) => { 
    console.log(id)   
    let indexOfBot = this.state.bots.findIndex(bot => bot.id === id)
    let newBotArray = [...this.state.bots]
    newBotArray[indexOfBot] = {...newBotArray[indexOfBot], inArmy: true}
      this.setState({
        bots: newBotArray
      }) 
  }

  removeFromBotPage = (id) => { 
    console.log(id)   
    let indexOfBot = this.state.bots.findIndex(bot => bot.id === id)
    let newBotArray = [...this.state.bots]
    newBotArray[indexOfBot] = {...newBotArray[indexOfBot], inArmy: false}
      this.setState({
        bots: newBotArray
      }) 
  }


  filterBots =  () => {
    return this.state.bots.filter(bot => bot.inArmy)
  }

  deleteBot = (id) => {
    fetch(`http://localhost:6001/bots/${id}`, {
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(data => {
      let botIndex = this.state.bots.findIndex(bot => bot.id === id)
      let newBotArray = [...this.state.bots]   
      newBotArray.splice(botIndex, 1)
      this.setState({bots: newBotArray})  
    })
  }

  render() {
    return <div>
      <YourBotArmy bots={this.filterBots()} removeFromBotPage={this.removeFromBotPage}  deleteBot={this.deleteBot} />
      <BotCollection bots={this.state.bots} addToBotPage={this.addToBotPage} deleteBot={this.deleteBot} />
    </div>;
  }
}

export default BotsPage;
