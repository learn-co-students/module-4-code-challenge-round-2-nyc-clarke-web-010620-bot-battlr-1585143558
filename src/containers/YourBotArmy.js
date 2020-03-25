import React, { Component } from "react";
import BotCard from "../components/BotCard"

class YourBotArmy extends Component {
  //your bot army code here...

  renderBotArmy = () => {
    return this.props.bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} handleClick={this.props.removeFromBotPage} deleteBot={this.props.deleteBot} />
    })
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
