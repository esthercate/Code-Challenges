function DisplayArea({ selectedBots }) {
  return (
    <>
      <div className='flex flex-col gap-5 w-full bg-green-600 px-4 pb-40 rounded-lg'>
        <h1 className='text-2xl font-semibold py-2'>Your Bot Army</h1>
        <div className='flex flex-wrap gap-3 justify-center'>
          {selectedBots.map((bot) => (
            <div key={bot.id} className='flex flex-col gap-2 w-72 bg-slate-200 rounded-md p-4'>
              <img src={bot.avatar_url} className='w-40 h-40' alt='bot image' />
              <span>{bot.name}</span>
              <span>{`Health: ${bot.health}`}</span>
              <span>{`Damage: ${bot.damage}`}</span>
              <span>{`Armor: ${bot.armor}`}</span>
              <span>{`Health: ${bot.health}`}</span>
              <span>{`Bot_class: ${bot.bot_class}`}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayArea;
