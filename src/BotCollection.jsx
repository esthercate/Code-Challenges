function BotCollection({
  id,
  name,
  health,
  damage,
  armor,
  bot_class,
  catchphrase,
  avatar_url,
  created_at,
  updated_at,
}) {
  return (
    <div className="grid grid-cols-5 gap-4 p-6">
      <div className="w-full">
        <img
          src={avatar_url}
          alt=""
          className="w-full h-[250px] object-cover"
        />
        key={bot.id}
        name={bot.name}
        
        category={bot.bot_class}
        catchphrase={bot.catchphrase}
        damage={bot.damage}
        health={bot.health}
        armor={bot.armor}
        botClass={bot.bot_class}
        id={bot.id}
      </div>
    </div>
  );
}

export default BotCollection;
