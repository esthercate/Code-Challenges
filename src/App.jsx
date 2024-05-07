import { useEffect, useState } from 'react'
import DisplayArea from './DisplayArea'
import BotCollection from './BotCollection'
import data from '../db.json'

function App() {
  const [bots, setBots] = useState([])
  const [selectedBots, setSelectedBots] = useState([])

  useEffect(() => {
    setBots(data.bots)
  }, [])

  // Function to handle bot selection
  const handleBotSelect = (id) => {
    const selectedBot = bots.find((bot) => bot.id === id)
    setSelectedBots([...selectedBots, selectedBot])
  }

  return (
    <>
      <main className='flex flex-col gap-5 w-full px-6'>
        <h1 className='flex justify-center p-5 font-extrabold text-7xl'>Bot Battlr.</h1>
        <DisplayArea selectedBots={selectedBots} />
        <BotCollection bots={bots} onSelect={handleBotSelect} />
      </main>
    </>
  )
}

export default App
