import BotCollection from "./BotCollection";

function YourBotArmy({ bots }) {
   renderBots = () => {
     return this.props.bots.map((bot) => {
       return <BotCollection key={bot.id} bot={bot} addBot={this.props.addBot} />;
     });
   };
   render()
  return (
    <div className="grid md:grid-cols-5 gap-4 my-10">{this.renderBots()}</div>
  );
}

export default YourBotArmy;