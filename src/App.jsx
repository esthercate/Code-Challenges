import { useEffect, useState } from "react";
import DisplayArea from "./DisplayArea";
import BotCollection from "./BotCollection";



function App() {
 
    const [bots , setBots] = useState([])

   useEffect(() => {
     fetch("http://localhost:3000/bots", {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
       },
     })
       .then((res) => res.json())

       .then((data) => setBots(data))
       .catch((error) => console.error(error));
   }, []);

   console.log(bots)

   function handleClick(id,classes){
    if (botArmy.length >= 10){
      alert("maximum limit reached")
    }else{
      if(classes.includes(classes)){
        alert("member is already existing from bot_class")
      }else {
        bots.map((bot)=>{
          if (bot.id ===id){
            setArmy([...army,bot])
            setClass([ ...classes, bot.bot_class])
          }else {
            const updateBots= bots.filter((bot)=> bot.id!== id)
            setBots(updateBots)
          }
        })
      }
    }
   }

  return (
    <>
      
          <main className=" container px-10">
      <h1 className=" flex justify-center p-5 font-extrabold text-7xl">
        Bot Battlr.
      </h1>
      <DisplayArea />
      <BotCollection onBotClick={handleClick}/>
      
      </main>
       
    </>
  )
}

export default App
