export default [
  //kitchen

  {
    id: 1,
    text: "You wake up in a strange place... it looks like a kitchen.",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 101,
      },
    ],
    imgSrc: "/images/locations/pixelKitchen.png",
  },
  {
    id: 101,
    text: "You can see a dusty cupboard, an icebox, and a table in front of you. To your left is a door. Who knows where that leads?",
    options: [
      {
        display: true,
        text: "Open the cupboard",
        nextText: 2,
      },
      {
        display: true,
        text: "Open the icebox",
        nextText: 3,
      },
      {
        display: true,
        text: "Inspect the table",
        nextText: 4,
      },
      {
        display: true,
        text: "Leave this room",
        nextText: 5,
      },
    ],
    imgSrc: "/images/locations/pixelKitchen.png",
  },
  {
    id: 2, // how to erase "open cupboard"

    text: "You look inside the cupboard and you find a few tarnished coins, a bronze key, and a few sheets of paper that kind of looks like the beginning of a story",
    options: [
      {
        text: "Take the items",
        display: true,
        setInventory: {
          items: { coins: true, bronzeKey: true, pages1: true },
        },
        hitFunction: ["SET_INVENTORY"],
        optionsToDisplayFalse: [0, 1],
        optionsToDisplayTrue: [2],
        nextText: 101,
      },
      {
        display: true,
        text: "Leave the items",
        nextText: 101,
      },
      {
        text: "there's nothing here",
        nextText: 101,
        display: false,
      },
    ],
    imgSrc: "/images/locations/pixelKitchen.png",
  },
  {
    id: 3,
    text: "You open the icebox and find a half-empty elixer and a jar of pickles",
    options: [
      {
        display: true,
        text: "take the elixer and pickles",
        setInventory: {
          items: { elixer: true, pickles: true },
        },
        hitFunction: ["SET_INVENTORY"],
        optionsToDisplayFalse: [0, 1],
        optionsToDisplayTrue: [2],
        nextText: 101,
      },
      {
        display: true,
        text: "leave the items",
        nextText: 101,
      },
      {
        text: "there's nothing here",
        nextText: 101,
        display: false,
      },
    ],
    imgSrc: "/images/locations/pixelKitchen.png",
  },
  {
    id: 4,
    text: "You inspect the table and find an ancient looking tome",
    options: [
      {
        display: true,
        text: "take the book",
        setInventory: {
          items: { book: true },
        },
        hitFunction: ["SET_INVENTORY"],

        optionsToDisplayFalse: [0, 1],
        optionsToDisplayTrue: [2],
        nextText: 101,
      },
      {
        display: true,
        text: "leave the book",
        nextText: 101,
      },
      {
        text: "there's nothing here",
        nextText: 101,
        display: false,
      },
    ],
    imgSrc: "/images/locations/pixelKitchen.png",
  },

  // armory

  {
    id: 5,
    text: "You walk into what looks like an armory. There, you see a burly- looking gentleman who looks not the least bit surprised to see you.",
    options: [
      {
        display: true,
        text: "Talk to the burly looking gentleman",
        nextText: 102,
      },
    ],
    imgSrc: "/images/locations/pixelArm.png",
  },
  {
    id: 102,
    text: "Hey! I see you've woken up! Sorry to put you in the kitchen, I hope you've had something to eat. By the way, who are you anyway?",
    options: [
      {
        display: true,
        text: "Wally Warrior",
        imgSrc: "/images/characters/barbarian.gif",
        HP: 35,
        nextText: 6,
        hitFunction: ["SET_CHARACTER"],
        name: "Wally Warrior",
      },
      {
        display: true,
        text: "Mindy Mage",
        imgSrc: "/images/characters/mage.gif",
        HP: 20,
        name: "Mindy Mage",

        nextText: 7,
        hitFunction: ["SET_CHARACTER"],
      },
      {
        display: true,
        text: "Roger Rogue",
        imgSrc: "/images/characters/thief.gif",
        HP: 25,
        name: "Roger Rogue",

        nextText: 8,
        hitFunction: ["SET_CHARACTER"],
      },
    ],
    // need to change to burly gentleman photo
    imgSrc: "/images/locations/pixelDude.png",
  },
  {
    id: 6,
    text: "Ah, so you're Wally Warrior! I've heard of you... You're a hero! I think you'll want to take these if you're planning on venturing further",
    options: [
      {
        display: true,
        text: "Take greatsword and chainmail armor",
        setInventory: {
          items: { greatsword: true, chainmail: true },
        },
        hitFunction: ["SET_INVENTORY"],

        nextText: 601,
      },
    ],
    imgSrc: "/images/locations/pixelDude.png",
  },
  {
    id: 7,
    text: "Ah, so you're Mindy Mage! I've heard of you... You're a hero! I think you'll want to take these if you're planning on venturing further",
    options: [
      {
        display: true,
        text: "Take Wooden Mage Staff and Armor of Agathyst",
        setInventory: {
          items: { mageStaff: true, armorOfAgathyst: true },
        },
        hitFunction: ["SET_INVENTORY"],

        nextText: 79,
      },
    ],
    imgSrc: "/images/locations/pixelDude.png",
  },
  {
    id: 8,
    text: "Ah, so you're Roger Rogue! I've heard of you... You're a hero! I think you'll want to take these if you're planning on venturing further",
    options: [
      {
        display: true,
        text: "Take shortsword and light leather armor",
        setInventory: {
          items: { shortsword: true, lightLeatherArmor: true },
        },
        hitFunction: ["SET_INVENTORY"],

        nextText: 89,
      },
    ],
    imgSrc: "/images/locations/pixelDude.png",
  },

  //////// WALLY WARRIOR

  {
    id: 601,
    text: "Make sure you scour each room for items to use on this quest. Beware, though, good traveler, not all items are helpful. Some prove to be more trouble than they're worth!",
    options: [
      {
        display: true,
        text: "Leave the armory",
        nextText: 610,
      },
      {
        display: true,
        text: "Attack the burly-looking gentleman",
        nextText: 611,
        imgSrc: "/images/characters/unknown.gif",
        HP: 1,
        hitFunction: ["SET_CHARACTER"],
        name: "Traveler",
      },
    ],
    // burly gentleman
    imgSrc: "/images/locations/pixelDude.png",
  },
  {
    id: 611,
    text: "The burly-looking gentleman is a lot burlier than you thought he was. He kills you with no trouble",
    options: [
      {
        // empty inventory?
        display: true,
        text: "Start Again?",
        nextText: 1,
        imgSrc: "/images/characters/unknown.gif",
        HP: 1,
        hitFunction: ["SET_CHARACTER"],
        name: "Traveler",
        hitFunction: ["RESTART"],
      },
    ],
    // attack splash
    imgSrc: "/images/locations/pixelPow.png",
  },
  {
    id: 610,
    text: "You crack open the door and step out into a dark, stone-walled hallway.",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 6103,
      },
    ],
    imgSrc: "/images/locations/pixelHallway.png",
  },
  {
    id: 6103,
    text: "It smells musty and you can hear shuffling behind some of these doors. You wonder what fresh hell awaits you...",
    options: [
      {
        display: true,
        text: "Open the door on the left",
        nextText: 612,
      },
      {
        display: true,
        text: "Open the door on the right",
        nextText: 613,
      },
      {
        display: true,
        text: "Go to the door at the end of the hallway",
        nextText: 621,
      },
    ],
    imgSrc: "/images/locations/pixelHallway.png",
  },
  {
    id: 612,
    text: "You open the door and step out into what looks like a library. You see a table in front of you. A red candle in a large, ornate holder illuminates the bookshelf in the back.",
    options: [
      {
        display: true,
        text: "inspect ornate candle holder",
        nextText: 615,
      },
      {
        display: true,
        text: "inspect bookshelf",
        nextText: 616,
      },
      {
        display: true,
        text: "inspect table",
        nextText: 617,
      },
      {
        display: true,
        text: "Exit into Hallway",
        nextText: 6103,
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 615,
    text: "A red candle that looks interesting enough to take",
    display: true,
    options: [
      {
        text: "take the candle",
        display: true,
        nextText: 612,
        setInventory: {
          items: { redCandle: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 616,
    text: "you see one of the books looks out of place. Upon further investigation, this book is hollow! Inside, you find a large bronze key",
    display: true,
    options: [
      {
        text: "take the items",
        display: true,
        nextText: 612,
        setInventory: {
          items: { bronzeKey2: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 617,
    text: "On the table, there is a large black candle. Looking around, you see some drawers. All of them are locked except one.",
    display: true,
    options: [
      {
        text: "take the black candle",
        display: true,
        nextText: 612,
        setInventory: {
          items: { blackCandle: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
      {
        text: "open the drawer",
        display: true,
        nextText: 618,
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 618,
    text: "In the drawer, you find another page of the book that looks like it continues the story you already have.",
    display: true,
    options: [
      {
        text: "take the pages",
        display: true,
        nextText: 612,
        setInventory: {
          items: { pages2: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    // cathedral
    id: 613,
    text: "You enter a large cathedral. It is barely lit, but you see a lone figure at the end of the room, chanting in some language you don't understand.",
    options: [
      {
        display: true,
        text: "Go to the end of the room and talk to the figure",
        nextText: 650,
      },
      {
        display: true,
        text: "This place is creepy. Retreat back into the hallway",
        nextText: 6103,
      },
    ],
    imgSrc: "/images/locations/pixelCathedral.png",
  },
  {
    id: 650,
    text: "As you get closer, the figure stops his strange chanting and turns to face you. 'Greetings, traveler' he says in a cold, scratchy voice, 'I am the dark priest of this cathedral. Have you the candles for the ritual?",
    options: [
      {
        display: true,
        text: "Hand priest the candles and back away.",
        setInventory: {
          items: { redCandle: false, blackCandle: false },
        },
        hitFunction: ["SET_INVENTORY"],
        nextText: 619,
      },
      {
        display: true,
        text: "This priest is too much. Get out of there!",
        nextText: 6103,
      },
    ],
    imgSrc: "/images/locations/pixelPriest.png",
  },
  {
    id: 619,
    text: "As you hand the candles over, they light with a black flame in the priest's hands. 'The dark ritual has begun. Thank you. Take this as a token of my dark gratitude.",
    options: [
      {
        display: true,
        text: "Take the red crystal the priest is offering and exit into hallway.",
        setInventory: {
          items: { redCrystal: true },
        },
        hitFunction: ["SET_INVENTORY"],
        HP: 30,
        imgSrc: "/images/characters/barbarian.gif",
        name: "Wally Warrior",
        nextText: 620,
        hitFunction: ["SET_CHARACTER"],
      },
      {
        display: true,
        text: "I'm not taking whatever you're offering, freak! I'm getting out of here!",
        nextText: 6103,
      },
    ],
    imgSrc: "/images/locations/pixelPriest.png",
  },
  {
    id: 620,
    text: "You can feel some of your life force draining itself into the crystal. Maybe this wasn't such a good idea.",
    options: [
      {
        display: true,
        text: "Exit into hallway",
        nextText: 6103,
      },
    ],
    imgSrc: "/images/locations/pixelCathedral.png",
  },
  {
    // must have keys in inventoy to open door... required inventory
    id: 621,
    text: "In front of you, you see a large, gated door with two keyholes",
    options: [
      {
        display: true,
        text: "Use the bronze keys to open the door",
        setInventory: {
          items: { bronzeKey: false, bronzeKey2: false },
        },
        hitFunction: ["SET_INVENTORY"],
        nextText: 614,
      },
      {
        display: true,
        text: "Go back to the beginning of the hallway",
        nextText: 6103,
      },
    ],
    imgSrc: "/images/locations/pixelEndDoor.png",
  },
  {
    id: 614,
    text: "You open the door and walk into what appears to be a woman's bedroom. An evil looking portrait hangs on the wall. You also see a dresser with the door cracked open and a large, open wooden chest.",
    options: [
      {
        display: true,
        text: "Inspect the dresser",
        nextText: 622,
      },
      {
        display: true,
        text: "Inspect the chest",
        nextText: 622,
      },
      {
        display: true,
        text: "Inspect the portrait",
        nextText: 622,
      },
    ],
    imgSrc: "/images/locations/pixelBedroom.png",
  },
  {
    id: 622,
    text: "Suddenly, the portrait begins to groan...'What fool dares enter my quarters?'",
    options: [
      {
        display: true,
        text: "Get ready to battle!",
        nextText: 623,
      },
    ],
    imgSrc: "/images/locations/pixelPainting.png",
  },
  {
    id: 623,
    text: "The portrait shakes itself to the floor and the room goes black except for a pillar of fire emanating from the painting.",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 624,
        imgSrc: "/images/characters/barbarian.gif",
        HP: 20,
        hitFunction: ["SET_CHARACTER"],
        name: "Wally Warrior",
      },
    ],
    imgSrc: "/images/locations/poof.gif",
  },
  {
    id: 624,
    text: "Suddenly, the flame dissipates and you can see the awful creature that has seem to come from the painting. Too late, you realize, for she has already struck you hard with her staff",
    options: [
      {
        display: true,
        text: "Dispense retribution!",
        nextText: 625,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 625,
    options: [
      {
        display: true,
        text: "Drink elixer",
        nextText: 626,
        setInventory: {
          items: { elixer: false },
        },
        hitFunction: ["SET_INVENTORY"],
        HP: 30,
        imgSrc: "/images/characters/barbarian.gif",
        name: "Wally Warrior",
        hitFunction: ["SET_CHARACTER"],
      },
      {
        display: true,
        text: "Eat pickles",
        nextText: 6272,
        setInventory: {
          items: { pickles: false },
        },
        hitFunction: ["SET_INVENTORY"],
        HP: 1,
        imgSrc: "/images/characters/unknown.gif",
        name: "Traveler",
        hitFunction: ["SET_CHARACTER"],
      },
      {
        display: true,
        text: "Attack",
        nextText: 628,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 626,
    text: "'Is that it? But, then again, what else should I expect from Wally WIMP?'",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 629,
        HP: 20,
        imgSrc: "/images/characters/barbarian.gif",
        name: "Wally WIMP",
        hitFunction: ["SET_CHARACTER"],
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 6262,
    text: "'Is that it? But, then again, what else should I expect from Wally WIMP?'",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 6292,
        HP: 0,
        imgSrc: "/images/characters/barbarian.gif",
        name: "Wally WIMP",
        hitFunction: ["SET_CHARACTER"],
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 628,
    text: "Your broadsword struck the witch! It seems to have no effect, however",
    options: [
      {
        display: true,
        text: "Prepare for battle!",
        nextText: 626,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 629,
    text: "That insult cut deep. You flashback to a memory of getting beat up in school and your father and his friends taunting you with heckles of 'Wally Wimp' How did she know? What dark powers are at work here?",
    options: [
      {
        display: true,
        text: "Dispense retribution!",
        nextText: 630,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 6292,
    text: "That insult cut deep. You flashback to a memory of getting beat up in school and your father and his friends taunting you with heckles of 'Wally Wimp' 'How did she know? What dark powers are at work here?' You have failed",
    options: [
      {
        display: true,
        text: "Restart",
        nextText: 1,
        imgSrc: "/images/characters/unknown.gif",
        HP: 1,
        hitFunction: ["SET_CHARACTER"],
        name: "Traveler",
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 630,
    options: [
      {
        display: true,
        text: "Eat pickles",
        nextText: 6272,
        setInventory: {
          items: { pickles: false },
        },
        hitFunction: ["SET_INVENTORY"],
        HP: 20,
        imgSrc: "/images/characters/barbarian.gif",
        name: "Wally WIMP",
        hitFunction: ["SET_CHARACTER"],
      },
      {
        display: true,
        text: "Attack",
        nextText: 631,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 631,
    text: "A sudden shift in the air occurs and you can feel your pocket vibrating. The crystal the dark priest has given you begins to glow. The disembodied screech you hear next announces, 'The dark ritual is COMPLETE!",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 632,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 6272,
    text: "Uh oh. Those were some old pickles. You probably shouldn't have eaten those. You fall over in agony and die a horrible death",
    options: [
      {
        display: true,
        text: "Restart?",
        nextText: 1,
        imgSrc: "/images/characters/unknown.gif",
        HP: 1,
        hitFunction: ["SET_CHARACTER"],
        name: "Traveler",
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 632,
    text: "The witch looks terrified, and the same pillar of flame that brought her into existence now begins to trap her once again inside the confines of the painting. Wally Warrior has triumphed over the forces of darkness... for now.",
    options: [
      {
        display: true,
        text: "Credits",
        nextText: 633,
        HP: 1,
        imgSrc: "/images/characters/unknown.gif",
        name: "traveler",
        hitFunction: ["SET_CHARACTER"],
      },
    ],
    imgSrc: "/images/locations/poof.gif",
  },
  {
    id: 633,
    text: "Made with love by group 5. Thank you for playing!",
    options: [
      {
        display: true,
        text: "Play again?",
        nextText: 1,
      },
    ],
    imgSrc: "/images/locations/poof.gif",
  },

  // cut to end game credits

  //////// MINDY MAGE

  {
    id: 79,
    text: "Make sure you scour each room for items to use on this quest. Beware, though, good traveler, not all items are helpful. Some prove to be more trouble than they're worth!",
    options: [
      {
        display: true,
        text: "Leave the armory",
        nextText: 710,
      },
      {
        display: true,
        text: "Attack the burly-looking gentleman",
        nextText: 711,
      },
    ],
    // burly gentleman
    imgSrc: "/images/locations/pixelDude.png",
  },
  {
    id: 711,
    text: "The burly-looking gentleman is a lot burlier than you thought he was. He kills you with no trouble",
    options: [
      {
        // empty inventory?
        display: true,
        text: "Start Again?",
        nextText: 1,
        hitFunction: ["RESTART"],
        imgSrc: "/images/characters/unknown.gif",
        HP: 1,
        hitFunction: ["SET_CHARACTER"],
        name: "Traveler",
      },
    ],
    // attack splash
    imgSrc: "/images/locations/pixelPow.png",
  },
  {
    id: 710,
    text: "You crack open the door and step out into a dark, stone-walled hallway.",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 7103,
      },
    ],
    imgSrc: "/images/locations/pixelHallway.png",
  },
  {
    id: 7103,
    text: "It smells musty and you can hear shuffling behind some of these doors. You wonder what fresh hell awaits you...",
    options: [
      {
        display: true,
        text: "Open the door on the left",
        nextText: 712,
      },
      {
        display: true,
        text: "Open the door on the right",
        nextText: 713,
      },
      {
        display: true,
        text: "Go to the door at the end of the hallway",
        nextText: 714,
      },
    ],
    imgSrc: "/images/locations/pixelHallway.png",
  },
  {
    id: 712,
    text: "You open the door and step out into what looks like a library. You see a table in front of you. A red candle in a large, ornate holder illuminates the bookshelf in the back.",
    options: [
      {
        display: true,
        text: "inspect ornate candle holder",
        nextText: 715,
      },
      {
        display: true,
        text: "inspect bookshelf",
        nextText: 716,
      },
      {
        display: true,
        text: "inspect table",
        nextText: 717,
      },
      {
        display: true,
        text: "Exit into Hallway",
        nextText: 710,
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 715,
    text: "this candle looks interesting enough to take",
    display: true,
    options: [
      {
        text: "take the candle",
        display: true,
        nextText: 712,
        setInventory: {
          items: { redCandle: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 716,
    text: "you see one of the books looks out of place. Upon further investigation, this book is hollow! Inside, you find a large bronze key",
    display: true,
    options: [
      {
        text: "take the items",
        display: true,
        nextText: 712,
        setInventory: {
          items: { bronzeKey2: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 717,
    text: "On the table, there is a large black candle. Looking around, you see some drawers. All of them are locked except one.",
    display: true,
    options: [
      {
        text: "take the black candle",
        display: true,
        nextText: 712,
        setInventory: {
          items: { blackCandle: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
      {
        text: "open the drawer",
        display: true,
        nextText: 718,
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 718,
    text: "In the drawer, you find more pages that look like they line up perfectly with the pages you already have.",
    display: true,
    options: [
      {
        text: "take the pages",
        display: true,
        nextText: 712,
        setInventory: {
          items: { pages2: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    // cathedral
    id: 713,
    text: "You enter a large cathedral. It is barely lit, but you see a lone figure at the end of the room, chanting in some language you don't understand.",
    options: [
      {
        display: true,
        text: "Go to the end of the room and talk to the figure",
        nextText: 750,
      },
      {
        display: true,
        text: "This place is creepy. Retreat back into the hallway",
        nextText: 7103,
      },
    ],
    imgSrc: "/images/locations/pixelCathedral.png",
  },
  {
    id: 750,
    text: "As you get closer, the figure stops his strange chanting and turns to face you. 'Greetings, traveler' he says in a cold, scratchy voice, 'I am the dark priest of this cathedral. Have you the candles for the ritual?",
    options: [
      {
        display: true,
        text: "Hand priest the candles and back away.",
        setInventory: {
          items: { redCandle: false, blackCandle: false },
        },
        hitFunction: ["SET_INVENTORY"],
        nextText: 719,
      },
      {
        display: true,
        text: "This priest is too much. Get out of there!",
        nextText: 7103,
      },
    ],
    imgSrc: "/images/locations/pixelPriest.png",
  },
  {
    id: 719,
    text: "As you hand the candles over, they light with a black flame in the priest's hands. 'The dark ritual has begun. Thank you. Take this as a token of my dark gratitude.",
    options: [
      {
        display: true,
        text: "Take the red crystal the priest is offering and exit into hallway.",
        setInventory: {
          items: { redCrystal: true },
        },
        hitFunction: ["SET_INVENTORY"],
        HP: 15,
        imgSrc: "/images/characters/mage.gif",
        name: "Mindy Mage",
        nextText: 720,
        hitFunction: ["SET_CHARACTER"],
      },
      {
        display: true,
        text: "I'm not taking whatever you're offering, freak! I'm getting out of here!",
        nextText: 7103,
      },
    ],
    imgSrc: "/images/locations/pixelPriest.png",
  },
  {
    id: 720,
    text: "You can feel some of your life force draining itself into the crystal. Maybe this wasn't such a good idea.",
    options: [
      {
        display: true,
        text: "Exit into hallway",
        nextText: 7103,
      },
    ],
    imgSrc: "/images/locations/pixelCathedral.png",
  },
  {
    // must have keys in inventoy to open door... required inventory
    id: 721,
    text: "In front of you, you see a large, gated door with two keyholes",
    options: [
      {
        display: true,
        text: "Use the bronze keys to open the door",
        setInventory: {
          items: { bronzeKey: false, bronzeKey2: false },
        },
        hitFunction: ["SET_INVENTORY"],
        nextText: 714,
      },
      {
        display: true,
        text: "Go back to the beginning of the hallway",
        nextText: 7103,
      },
    ],
    imgSrc: "/images/locations/pixelEndDoor.png",
  },
  {
    id: 714,
    text: "You open the door and walk into what appears to be a woman's bedroom. An evil looking portrait hangs on the wall. You also see a dresser with the door cracked open and a large, open wooden chest.",
    options: [
      {
        display: true,
        text: "Inspect the dresser",
        nextText: 722,
      },
      {
        display: true,
        text: "Inspect the chest",
        nextText: 722,
      },
      {
        display: true,
        text: "Inspect the portrait",
        nextText: 722,
      },
    ],
    imgSrc: "/images/locations/pixelBedroom.png",
  },
  {
    id: 722,
    text: "Suddenly, the portrait begins to groan...'What fool dares enter my quarters?'",
    options: [
      {
        display: true,
        text: "Get ready to battle!",
        nextText: 723,
      },
    ],
    imgSrc: "/images/locations/pixelPainting.png",
  },
  {
    id: 723,
    text: "The portrait shakes itself to the floor and the room goes black except for a pillar of fire emanating from the painting.",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 724,
        imgSrc: "/images/characters/mage.gif",
        HP: 15,
        hitFunction: ["SET_CHARACTER"],
        name: "Mindy Mage",
      },
    ],
    imgSrc: "/images/locations/poof.gif",
  },
  {
    id: 724,
    text: "Suddenly, the flame dissipates and you can see the awful creature that has seem to come from the painting. Too late, you realize, for she has already struck you hard with her staff",
    options: [
      {
        display: true,
        text: "Dispense retribution!",
        nextText: 725,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 725,
    options: [
      {
        display: true,
        text: "Drink elixer",
        nextText: 726,
        setInventory: {
          items: { elixer: false },
        },
        hitFunction: ["SET_INVENTORY"],
        HP: 20,
        imgSrc: "/images/characters/mage.gif",
        name: "Mindy Mage",
        hitFunction: ["SET_CHARACTER"],
      },
      {
        display: true,
        text: "Eat pickles",
        nextText: 7272,
        setInventory: {
          items: { pickles: false },
        },
        hitFunction: ["SET_INVENTORY"],
        HP: 1,
        imgSrc: "/images/characters/unknown.gif",
        name: "Traveler",
        hitFunction: ["SET_CHARACTER"],
      },
      {
        display: true,
        text: "Attack",
        nextText: 728,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 726,
    text: "'Is that it? But, then again, what else should I expect from Mindy MUCK-UP?'",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 729,
        HP: 5,
        imgSrc: "/images/characters/mage.gif",
        name: "Mindy MUCK-UP",
        hitFunction: ["SET_CHARACTER"],
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 7262,
    text: "'Is that it? But, then again, what else should I expect from Mindy MUCK-UP?'",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 7292,
        HP: 5,
        imgSrc: "/images/characters/unknown.gif",
        name: "Mindy MUCK-UP",
        hitFunction: ["SET_CHARACTER"],
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 728,
    text: "Your staff struck the witch! It seems to have no effect, however",
    options: [
      {
        display: true,
        text: "Prepare for battle!",
        nextText: 726,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 729,
    text: "That insult cut deep. You flashback to a memory of your first love and how you accidentally set them on fire. The town called you 'Mindy Muck-up' and banished you for life. How did she know? What dark powers are at work here?",
    options: [
      {
        display: true,
        text: "Dispense retribution!",
        nextText: 730,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 7292,
    text: "That insult cut deep. You flashback to a memory of your first love and how you accidentally set them on fire. The town called you 'Mindy Muck-up' and banished you for life. How did she know? What dark powers are at work here?",
    options: [
      {
        display: true,
        text: "Restart",
        nextText: 1,
        imgSrc: "/images/characters/unknown.gif",
        HP: 1,
        hitFunction: ["SET_CHARACTER"],
        name: "Traveler",
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 730,
    options: [
      {
        display: true,
        text: "Eat pickles",
        nextText: 7272,
        setInventory: {
          items: { pickles: false },
        },
        hitFunction: ["SET_INVENTORY"],
        HP: 1,
        imgSrc: "/images/characters/unknown.gif",
        name: "Traveler",
        hitFunction: ["SET_CHARACTER"],
      },
      {
        display: true,
        text: "Attack",
        nextText: 731,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 731,
    text: "A sudden shift in the air occurs and you can feel your pocket vibrating. The crystal the dark priest has given you begins to glow. The disembodied screech you hear next announces, 'The dark ritual is COMPLETE!",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 732,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 7272,
    text: "Uh oh. Those were some old pickles. You probably shouldn't have eaten those. You fall over in agony and die a horrible death",
    options: [
      {
        display: true,
        text: "Restart?",
        nextText: 1,
        HP: 1,
        imgSrc: "/images/characters/unknown.gif",
        name: "Traveler",
        hitFunction: ["SET_CHARACTER"],
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 732,
    text: "The witch looks terrified, and the same pillar of flame that brought her into existence now begins to trap her once again inside the confines of the painting. Mindy Mage has triumphed over the forces of darkness... for now.",
    options: [
      {
        display: true,
        text: "Credits",
        nextText: 633,
        HP: 1,
        imgSrc: "/images/characters/unknown.gif",
        name: "traveler",
        hitFunction: ["SET_CHARACTER"],
      },
    ],
    imgSrc: "/images/locations/poof.gif",
  },

  //////// ROGER ROGUE

  {
    id: 9,
    text: "Make sure you scour each room for items to use on this quest. Beware, though, good traveler, not all items are helpful. Some prove to be more trouble than they're worth!",
    options: [
      {
        display: true,
        text: "Leave the armory",
        nextText: 10,
      },
      {
        display: true,
        text: "Attack the burly-looking gentleman",
        nextText: 11,
      },
    ],
    // burly gentleman
    imgSrc: "/images/locations/pixelArm.png",
  },
  {
    id: 11,
    text: "The burly-looking gentleman is a lot burlier than you thought he was. He kills you with no trouble",
    options: [
      {
        // empty inventory?
        display: true,
        text: "Start Again?",
        nextText: 1,
        hitFunction: ["RESTART"],
        imgSrc: "/images/characters/unknown.gif",
        HP: 1,
        hitFunction: ["SET_CHARACTER"],
        name: "Traveler",
      },
    ],
    // attack splash
    imgSrc: "/images/locations/pixelPow.png",
  },
  {
    id: 10,
    text: "You crack open the door and step out into a dark, stone-walled hallway.",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 103,
      },
    ],
    imgSrc: "/images/locations/pixelHallway.png",
  },
  {
    id: 103,
    text: "It smells musty and you can hear shuffling behind some of these doors. You wonder what fresh hell awaits you...",
    options: [
      {
        display: true,
        text: "Open the door on the left",
        nextText: 12,
      },
      {
        display: true,
        text: "Open the door on the right",
        nextText: 13,
      },
      {
        display: true,
        text: "Go to the door at the end of the hallway",
        nextText: 14,
      },
    ],
    imgSrc: "/images/locations/pixelHallway.png",
  },
  {
    id: 12,
    text: "You open the door and step out into what looks like a library...",
    options: [
      {
        display: true,
        text: "inspect red candle",
        nextText: 15,
      },
      {
        display: true,
        text: "inspect bookshelf",
        nextText: 16,
      },
      {
        display: true,
        text: "inspect table",
        nextText: 17,
      },
      {
        display: true,
        text: "Exit into Hallway",
        nextText: 10,
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 15,
    text: "this candle looks interesting enough to take",
    display: true,
    options: [
      {
        text: "take the candle",
        display: true,
        nextText: 12,
        setInventory: {
          items: { redCandle: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 16,
    text: "you see one of the books looks out of place. Upon further investigation, this book is hollow! Inside, you find a elixer potion and a large bronze key",
    display: true,
    options: [
      {
        text: "take the items",
        display: true,
        nextText: 12,
        setInventory: {
          items: { elixer2: true, bronzeKey2: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 17,
    text: "On the table, there is a large black candle. Looking around, you see some drawers. All of them are locked except one.",
    display: true,
    options: [
      {
        text: "take the black candle",
        display: true,
        nextText: 12,
        setInventory: {
          items: { blackCandle: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
      {
        text: "open the drawer",
        display: true,
        nextText: 18,
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 18,
    text: "In the drawer, you find another piece of the pages that looks like it lines up perfectly with the piece you already have.",
    display: true,
    options: [
      {
        text: "take the pages piece",
        display: true,
        nextText: 12,
        setInventory: {
          items: { pages2: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    // cathedral
    id: 13,
    text: "Cathedral... dark priest",
    options: [
      {
        display: true,
        text: "Place candles in respective holders and light",
        setInventory: {
          items: { redCandle: false, blackCandle: false },
        },
        hitFunction: ["SET_INVENTORY"],

        nextText: 19,
      },
    ],
    imgSrc: "/images/locations/pixelCathedral.png",
  },
  {
    id: 19,
    text: "The dark ritual has begun...",
    options: [
      {
        display: true,
        text: "Exit into hallway",
        nextText: 10,
      },
    ],
    imgSrc: "/images/locations/pixelPriest.png",
  },
  {
    // must have keys in inventoy to open door... required inventory
    id: 14,
    text: "Open the door with keys and you see a large portrait of a woman. The painting seems to be moving... Intruder... handmaids",
    options: [
      {
        display: true,
        text: "Begin battle",
        // encounterCode
      },
    ],
    imgSrc: "/images/locations/pixelBedroom.png",
  },

  {
    id: 89,
    text: "Make sure you scour each room for items to use on this quest. Beware, though, good traveler, not all items are helpful. Some prove to be more trouble than they're worth!",
    options: [
      {
        display: true,
        text: "Leave the armory",
        nextText: 810,
      },
      {
        display: true,
        text: "Attack the burly-looking gentleman",
        nextText: 811,
      },
    ],
    // burly gentleman
    imgSrc: "/images/locations/pixelDude.png",
  },
  {
    id: 811,
    text: "The burly-looking gentleman is a lot burlier than you thought he was. He kills you with no trouble",
    options: [
      {
        // empty inventory?
        display: true,
        text: "Start Again?",
        nextText: 1,
        hitFunction: ["RESTART"],
        imgSrc: "/images/characters/unknown.gif",
        HP: 1,
        hitFunction: ["SET_CHARACTER"],
        name: "Traveler",
      },
    ],
    // attack splash
    imgSrc: "/images/locations/pixelPow.png",
  },
  {
    id: 810,
    text: "You crack open the door and step out into a dark, stone-walled hallway.",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 8103,
      },
    ],
    imgSrc: "/images/locations/pixelHallway.png",
  },
  {
    id: 8103,
    text: "It smells musty and you can hear shuffling behind some of these doors. You wonder what fresh hell awaits you...",
    options: [
      {
        display: true,
        text: "Open the door on the left",
        nextText: 812,
      },
      {
        display: true,
        text: "Open the door on the right",
        nextText: 813,
      },
      {
        display: true,
        text: "Go to the door at the end of the hallway",
        nextText: 814,
      },
    ],
    imgSrc: "/images/locations/pixelHallway.png",
  },
  {
    id: 812,
    text: "You open the door and step out into what looks like a library. You see a table in front of you. A red candle in a large, ornate holder illuminates the bookshelf in the back.",
    options: [
      {
        display: true,
        text: "inspect ornate candle holder",
        nextText: 815,
      },
      {
        display: true,
        text: "inspect bookshelf",
        nextText: 816,
      },
      {
        display: true,
        text: "inspect table",
        nextText: 817,
      },
      {
        display: true,
        text: "Exit into Hallway",
        nextText: 810,
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 815,
    text: "this candle looks interesting enough to take",
    display: true,
    options: [
      {
        text: "take the candle",
        display: true,
        nextText: 812,
        setInventory: {
          items: { redCandle: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 816,
    text: "you see one of the books looks out of place. Upon further investigation, this book is hollow! Inside, you find a large bronze key",
    display: true,
    options: [
      {
        text: "take the key",
        display: true,
        nextText: 812,
        setInventory: {
          items: { bronzeKey2: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 817,
    text: "On the table, there is a large black candle. Looking around, you see some drawers. All of them are locked except one.",
    display: true,
    options: [
      {
        text: "take the black candle",
        display: true,
        nextText: 812,
        setInventory: {
          items: { blackCandle: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
      {
        text: "open the drawer",
        display: true,
        nextText: 818,
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    id: 818,
    text: "In the drawer, you find another one of the pages that looks like it lines up perfectly with the ones you already have.",
    display: true,
    options: [
      {
        text: "take the page",
        display: true,
        nextText: 812,
        setInventory: {
          items: { pages2: true },
        },
        hitFunction: ["SET_INVENTORY"],
      },
    ],
    imgSrc: "/images/locations/pixelLibrary.png",
  },
  {
    // cathedral
    id: 813,
    text: "You enter a large cathedral. It is barely lit, but you see a lone figure at the end of the room, chanting in some language you don't understand.",
    options: [
      {
        display: true,
        text: "Go to the end of the room and talk to the figure",
        nextText: 850,
      },
      {
        display: true,
        text: "This place is creepy. Retreat back into the hallway",
        nextText: 8103,
      },
    ],
    imgSrc: "/images/locations/pixelCathedral.png",
  },
  {
    id: 850,
    text: "As you get closer, the figure stops his strange chanting and turns to face you. 'Greetings, traveler' he says in a cold, scratchy voice, 'I am the dark priest of this cathedral. Have you the candles for the ritual?",
    options: [
      {
        display: true,
        text: "Hand priest the candles and back away.",
        setInventory: {
          items: { redCandle: false, blackCandle: false },
        },
        hitFunction: ["SET_INVENTORY"],
        nextText: 819,
      },
      {
        display: true,
        text: "This priest is too much. Get out of there!",
        nextText: 8103,
      },
    ],
    imgSrc: "/images/locations/pixelPriest.png",
  },
  {
    id: 819,
    text: "As you hand the candles over, they light with a black flame in the priest's hands. 'The dark ritual has begun. Thank you. Take this as a token of my dark gratitude.",
    options: [
      {
        display: true,
        text: "Take the red crystal the priest is offering and exit into hallway.",
        setInventory: {
          items: { redCrystal: true },
        },
        hitFunction: ["SET_INVENTORY"],
        HP: 20,
        imgSrc: "/images/characters/thief.gif",
        name: "Roger Rogue",
        nextText: 820,
        hitFunction: ["SET_CHARACTER"],
      },
      {
        display: true,
        text: "I'm not taking whatever you're offering, freak! I'm getting out of here!",
        nextText: 8103,
      },
    ],
    imgSrc: "/images/locations/pixelPriest.png",
  },
  {
    id: 820,
    text: "You can feel some of your life force draining itself into the crystal. Maybe this wasn't such a good idea.",
    options: [
      {
        display: true,
        text: "Exit into hallway",
        nextText: 8103,
      },
    ],
    imgSrc: "/images/locations/pixelCathedral.png",
  },
  {
    // must have keys in inventoy to open door... required inventory
    id: 821,
    text: "In front of you, you see a large, gated door with two keyholes",
    options: [
      {
        display: true,
        text: "Use the bronze keys to open the door",
        setInventory: {
          items: { bronzeKey: false, bronzeKey2: false },
        },
        hitFunction: ["SET_INVENTORY"],
        nextText: 814,
      },
      {
        display: true,
        text: "Go back to the beginning of the hallway",
        nextText: 8103,
      },
    ],
    imgSrc: "/images/locations/pixelEndDoor.png",
  },
  {
    id: 814,
    text: "You open the door and walk into what appears to be a woman's bedroom. An evil looking portrait hangs on the wall. You also see a dresser with the door cracked open and a large, open wooden chest.",
    options: [
      {
        display: true,
        text: "Inspect the dresser",
        nextText: 822,
      },
      {
        display: true,
        text: "Inspect the chest",
        nextText: 822,
      },
      {
        display: true,
        text: "Inspect the portrait",
        nextText: 822,
      },
    ],
    imgSrc: "/images/locations/pixelBedroom.png",
  },
  {
    id: 822,
    text: "Suddenly, the portrait begins to groan...'What fool dares enter my quarters?'",
    options: [
      {
        display: true,
        text: "Get ready to battle!",
        nextText: 823,
      },
    ],
    imgSrc: "/images/locations/pixelPainting.png",
  },
  {
    id: 823,
    text: "The portrait shakes itself to the floor and the room goes black except for a pillar of fire emanating from the painting.",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 824,
        imgSrc: "/images/characters/thief.gif",
        HP: 15,
        hitFunction: ["SET_CHARACTER"],
        name: "Roger Rogue",
      },
    ],
    imgSrc: "/images/locations/poof.gif",
  },
  {
    id: 824,
    text: "Suddenly, the flame dissipates and you can see the awful creature that has seem to come from the painting. Too late, you realize, for she has already struck you hard with her staff",
    options: [
      {
        display: true,
        text: "Dispense retribution!",
        nextText: 825,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 825,
    options: [
      {
        display: true,
        text: "Drink elixer",
        nextText: 826,
        setInventory: {
          items: { elixer: false },
        },
        hitFunction: ["SET_INVENTORY"],
        HP: 25,
        imgSrc: "/images/characters/thief.gif",
        name: "Roger Rogue",
        hitFunction: ["SET_CHARACTER"],
      },
      {
        display: true,
        text: "Eat pickles",
        nextText: 8272,
        setInventory: {
          items: { pickles: false },
        },
        hitFunction: ["SET_INVENTORY"],
        HP: 1,
        imgSrc: "/images/characters/unknown.gif",
        name: "Traveler",
        hitFunction: ["SET_CHARACTER"],
      },
      {
        display: true,
        text: "Attack",
        nextText: 828,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 826,
    text: "'Is that it? But, then again, what else should I expect from ROTTEN Roger?'",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 829,
        HP: 5,
        imgSrc: "/images/characters/thief.gif",
        name: "ROTTEN Roger",
        hitFunction: ["SET_CHARACTER"],
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 8262,
    text: "'Is that it? But, then again, what else should I expect from ROTTEN Roger?'",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 8292,
        HP: 5,
        imgSrc: "/images/characters/unknown.gif",
        name: "ROTTEN Roger",
        hitFunction: ["SET_CHARACTER"],
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 828,
    text: "Your short sword struck the witch! It seems to have no effect, however",
    options: [
      {
        display: true,
        text: "Prepare for battle!",
        nextText: 826,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 829,
    text: "That insult cut deep. You flashback to a memory of your wife calling you Rotten Roger for stealing her jewelry. You probably deserved it, but the pain still lingers. How did she know? What dark powers are at work here?",
    options: [
      {
        display: true,
        text: "Dispense retribution!",
        nextText: 830,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 8292,
    text: "That insult cut deep. You flashback to a memory of your wife calling you Rotten Roger for stealing her jewelry. You probably deserved it, but the pain still lingers. How did she know? What dark powers are at work here?",
    options: [
      {
        display: true,
        text: "Restart",
        nextText: 1,
        imgSrc: "/images/characters/unknown.gif",
        HP: 1,
        hitFunction: ["SET_CHARACTER"],
        name: "Traveler",
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 830,
    options: [
      {
        display: true,
        text: "Eat pickles",
        nextText: 8272,
        setInventory: {
          items: { pickles: false },
        },
        hitFunction: ["SET_INVENTORY"],
        HP: 1,
        imgSrc: "/images/characters/thief.gif",
        name: "ROTTEN Roger",
        hitFunction: ["SET_CHARACTER"],
      },
      {
        display: true,
        text: "Attack",
        nextText: 831,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 831,
    text: "A sudden shift in the air occurs and you can feel your pocket vibrating. The crystal the dark priest has given you begins to glow. The disembodied screech you hear next announces, 'The dark ritual is COMPLETE!",
    options: [
      {
        display: true,
        text: "Next",
        nextText: 832,
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 8272,
    text: "Uh oh. Those were some old pickles. You probably shouldn't have eaten those. You fall over in agony and die a horrible death",
    options: [
      {
        display: true,
        text: "Restart?",
        nextText: 1,
        HP: 1,
        imgSrc: "/images/characters/unknown.gif",
        name: "Traveler",
        hitFunction: ["SET_CHARACTER"],
      },
    ],
    imgSrc: "/images/locations/pixelMomReal.png",
  },
  {
    id: 832,
    text: "The witch looks terrified, and the same pillar of flame that brought her into existence now begins to trap her once again inside the confines of the painting. Roger Rogue has triumphed over the forces of darkness... for now.",
    options: [
      {
        display: true,
        text: "Credits",
        nextText: 633,
        HP: 1,
        imgSrc: "/images/characters/unknown.gif",
        name: "traveler",
        hitFunction: ["SET_CHARACTER"],
      },
    ],
    imgSrc: "/images/locations/poof.gif",
  },
];
