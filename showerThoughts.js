//function returning message to the user

// Array of random messages
const messages = [
    "Maybe plants are really farming us, giving us oxygen until we eventually expire and turn into mulch which they can consume",
    "If my calculator had a history, it would be more embarrassing than my browser history.",
    "Lawyers hope you get sued, doctors hope you get sick, cops hope you're a criminal, mechanics hope you have car trouble, but only a thief wishes prosperity for you.",
    "Tall people are expected to use their reach to help shorter people, but if a tall person were to ask a short person to hand them something they dropped on the floor it'd be insulting.",
    "What if Earth is like one of those uncontacted tribes in South America, like the whole Galaxy knows we're here but they've agreed not to contact us until we figure it out for ourselves.",
    "Aliens invaded the Moon on July 20th, 1969.",
    "When you say 'Forward' or 'Back', your lips move in those directions.",
    "I've woken up over 10,000 times and I'm still not used to it",
    "Tobacco companies kill their best customers and condom companies kill their future customers.",
    "When a company offers me a better price after I cancel their subscription, they're just admitting they were overcharging me.",
    "Christmas feels more like a deadline than a holiday.",
    "People who are good looking but have terrible personalities are basically real life click baits.",
    "When people think about travelling to the past, they worry about accidentally changing the present, but no one in the present really thinks they can radically change the future.",
    "There should be a millennial edition of Monopoly where you just walk round the board paying rent, never able to buy anything.",
    "When I bake bread, I give thousands of yeast organisms false hope by feeding them sugar, before ruthlessly baking them to death in an oven and eating their corpses.",
    "Gyms should have memberships where your fee goes down based on how often you go.",
    "My dog understand several human words. I don’t understand any dog barks. He may be smarter than me.",
    "I recognise click bait almost every time, but still want to know what that child celebrity looks like today.",
    "Nothing is on fire, fire is on things.",
    "I mostly use my driver's license to buy stuff that impairs my ability to drive.",
    "If Google matched people up by their browsing history, it could be the greatest online dating website of all time.",
    "Someone who says 'I'll be there in 6 minutes' will normally arrive before someone who says 'I will be there in 5 minutes'.",
    "If aliens come to earth, we have to explain why we made dozens of movies in which we fight and kill them.",
    "It's sad that having real ingredients in food products is a selling point.",
    "A guy can decline an invitation by saying his girlfriend won't let him go and everyone will likely understand. But if a girl declines an invitation by saying her boyfriend won't let her go, people will likely get concerned.",
    "Earth is like a guy who knows exactly where to stand next to a bonfire.",
    "The Swiss must have been pretty confident in their chances of victory if they included a wine bottle corkscrew on their army knife.",
    "April Fool's Day is the one day of the year when people critically evaluate news articles before accepting them as true.",
    "If cats had wings, they'd still just lay there.",
    "1984-2000 seems a very long time compared to 2000-2016.",
    "When drone technology becomes cheap enough, hands-free umbrellas are gonna be the shit.",
    "Taxes are like a subscription to your Country that you can't cancel, no matter how bad the service gets.",
    "Car horns should only be allowed to be in pitches C, E, and G, so whenever two people honk at the same time it will be in harmony and traffic jams will sound like symphonies.",
    "The person who would proof read Hitler's speeches was a grammar Nazi.",
    "A ton of people is literally 12 to 15 people.",
    "As a kid, 99.9% of the times I cried was due to physical pain. As an adult, 99.9% of the times I have cried was due to emotional pain.",
    "Siri or Cortana should say 'uhm...' 'uh...' 'hm...' instead of showing a buffering animation.",
    "An 'unlimited minutes per month' phone plan really only gives you 44,640 minutes per month at best.",
    "Your stomach thinks that all potatoes are mashed.",
    "Humans are really bad at recharging, it takes about 8 hours charge for 16 hours of use.",
    "Big supermarkets should have baskets placed around the store for that moment when I realise I can't carry another thing and should have got a basket.",
    "Websites should post their password requirements on their login pages so I can remember WTF I needed to do to my normal password to make it work on their site.",
    "Scientists are adult kids stuck in the 'why phase'.",
    "Clapping is just hitting your hands together repeatedly because you like something.",
    "When jogging, we put on special clothes so people don't think we are running from or to something.",
    "In order to fall asleep, you have to pretend to be asleep.",
    "When the older generations says this generation is terrible, they're really saying they sucked as parents.",
    "Why do people say 'tuna fish' when they don't say 'beef mammal' or 'chicken bird'?",
    "If a stranger insults me, I'l probably ignore it, as their opinion is meaningless. If a stranger compliments me, I'll probably treasure it, as their opinion is important.",
    "The Japanese flag could actually be a pie chart of how much of Japan is Japan.",
    "The object of golf is to play the least amount of golf.",
    "Almost every hand I've ever shaken has had a dick in it.",
    "The sinking of the Titanic must have been a miracle to the lobsters in the kitchen.",
    "There exists a set of finite actions that, if I performed them in the correct order, would make me a millionaire in a day. I just don't know what they are.",
    "If opposites attract, I should be dating a gorgeous, billionaire supermodel that has a loving family.",
    "The Viagra commercial says 'make sure your heart is healthy enough for sex'. That's a really deep question if you think about it in a more metaphorical way.",
    "Using solar panels to power an air conditioning unit is like using the Sun's power against itself.",
    "Brushing your teeth is the only time you clean your skeleton.",
    "'Where are you' is probably the least used phrase in sign language.",
    "We never wash our belts, but they are the first thing we touch after wiping our butts.",
    "'Strap-on' spelled backwards is 'no parts'.",
    "Teenagers drive like they have limited time & old people drive like they have all the time in the world.",
    "If I punch myself in the face and it hurts...does that make me weak or strong?"

  ];
  
  // Function to generate a random message
  function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }
  
  // Generate and display a random message
  const randomMessage = getRandomMessage();
  console.log(randomMessage);