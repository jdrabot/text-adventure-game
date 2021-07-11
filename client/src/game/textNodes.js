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
    imgSrc: "/images/locations/kitchen.jpeg",
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
    imgSrc: "/images/locations/kitchen.jpeg",
  },
  {
    id: 2, // how to erase "open cupboard"

    text: "You look inside the cupboard and you find a few tarnished coins, a bronze key, and a shred of paper that kind of looks like a map",
    options: [
      {
        text: "Take the items",
        display: true,
        setInventory: {
          items: { coins: true, bronzeKey: true, map1: true },
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
    imgSrc: "/images/locations/kitchen.jpeg",
  },
  {
    id: 3,
    text: "You open the icebox and find a half-empty mana potion and a jar of pickles",
    options: [
      {
        display: true,
        text: "take the potion and pickles",
        setInventory: {
          items: { mana: true, pickles: true },
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
    imgSrc: "/images/locations/kitchen.jpeg",
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
    imgSrc: "/images/locations/kitchen.jpeg",
  },

  // armory

  {
    id: 5,
    // image change
    text: "You walk into what looks like an armory. There, you see a burly- looking gentleman who looks not the least bit surprised to see you.",
    options: [
      {
        display: true,
        text: "Talk to the burly looking gentleman",
        nextText: 102,
      },
    ],
    imgSrc: "/images/locations/pixelArmory.png",
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
    imgSrc: "/images/locations/pixelArmory.png",
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

        nextText: 9,
      },
    ],
    imgSrc: "/images/locations/pixelArmory.png",
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

        nextText: 9,
      },
    ],
    imgSrc: "/images/locations/pixelArmory.png",
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

        nextText: 9,
      },
    ],
    imgSrc: "/images/locations/pixelArmory.png",
  },

  //////// WALLY WARRIOR

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
    imgSrc: "/images/locations/pixelArmory.png",
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
      },
    ],
    // attack splash
    imgSrc: "/images/locations/pixelArmory.png",
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
    imgSrc: "/images/locations/pixelHall.png",
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
    imgSrc: "/images/locations/pixelHall.png",
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
    text: "you see one of the books looks out of place. Upon further investigation, this book is hollow! Inside, you find a mana potion and a large bronze key",
    display: true,
    options: [
      {
        text: "take the items",
        display: true,
        nextText: 12,
        setInventory: {
          items: { mana2: true, bronzeKey2: true },
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
    text: "In the drawer, you find another piece of the map that looks like it lines up perfectly with the piece you already have.",
    display: true,
    options: [
      {
        text: "take the map piece",
        display: true,
        nextText: 12,
        setInventory: {
          items: { map2: true },
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
    imgSrc: "/images/locations/pixelCath.png",
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
    imgSrc: "/images/locations/pixelCath.png",
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
    imgSrc: "/images/locations/pixelMother.png",
  },


  // cut to end game credits




  //////// MINDY MAGE

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
    imgSrc: "/images/locations/pixelArmory.png",
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
      },
    ],
    // attack splash
    imgSrc: "/images/locations/pixelArmory.png",
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
    imgSrc: "/images/locations/pixelHall.png",
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
    imgSrc: "/images/locations/pixelHall.png",
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
    text: "you see one of the books looks out of place. Upon further investigation, this book is hollow! Inside, you find a mana potion and a large bronze key",
    display: true,
    options: [
      {
        text: "take the items",
        display: true,
        nextText: 12,
        setInventory: {
          items: { mana2: true, bronzeKey2: true },
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
    text: "In the drawer, you find another piece of the map that looks like it lines up perfectly with the piece you already have.",
    display: true,
    options: [
      {
        text: "take the map piece",
        display: true,
        nextText: 12,
        setInventory: {
          items: { map2: true },
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
    imgSrc: "/images/locations/pixelCath.png",
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
    imgSrc: "/images/locations/pixelCath.png",
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
    imgSrc: "/images/locations/pixelMother.png",
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
    imgSrc: "/images/locations/pixelArmory.png",
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
      },
    ],
    // attack splash
    imgSrc: "/images/locations/pixelArmory.png",
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
    imgSrc: "/images/locations/pixelHall.png",
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
    imgSrc: "/images/locations/pixelHall.png",
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
    text: "you see one of the books looks out of place. Upon further investigation, this book is hollow! Inside, you find a mana potion and a large bronze key",
    display: true,
    options: [
      {
        text: "take the items",
        display: true,
        nextText: 12,
        setInventory: {
          items: { mana2: true, bronzeKey2: true },
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
    text: "In the drawer, you find another piece of the map that looks like it lines up perfectly with the piece you already have.",
    display: true,
    options: [
      {
        text: "take the map piece",
        display: true,
        nextText: 12,
        setInventory: {
          items: { map2: true },
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
    imgSrc: "/images/locations/pixelCath.png",
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
    imgSrc: "/images/locations/pixelCath.png",
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
    imgSrc: "/images/locations/pixelMother.png",
  },
    
];
