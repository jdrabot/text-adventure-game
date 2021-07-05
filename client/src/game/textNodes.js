export default [
  //kitchen
  {
    id: 1,
    text: "You wake up in a strange place... it looks like a kitchen.",
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
          optionsToDisplayFalse: [0, 1],
        },
        nextText: 1,
      },
      {
        display: true,
        text: "Leave the items",
        nextText: 1,
      },
      {
        text: "there's nothing here",
        nextText: 1,
        display: false,
      },
    ],
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
          optionsToDisplayFalse: [0, 1],
        },
        nextText: 1,
      },
      {
        display: true,
        text: "leave the items",
        nextText: 1,
      },
      {
        text: "there's nothing here",
        nextText: 1,
        display: false,
      },
    ],
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
          optionsToDisplayFalse: [0, 1],
        },
        nextText: 1,
      },
      {
        display: true,
        text: "leave the book",
        nextText: 1,
      },
      {
        text: "there's nothing here",
        nextText: 1,
        display: false,
      },
    ],
  },

  // armory

  {
    id: 5,
    text: "You walk into what looks like an armory. There, you see a burly-looking gentleman who looks not the least bit surprised to see you. 'Hey! I see you've woken up! Sorry to put you in the kitchen, I hope you've had something to eat. By the way, what kind of adventurer are you anyway?",
    options: [
      {
        display: true,
        text: "Warrior",
        nextText: 6,
      },
      {
        display: true,
        text: "Mage",
        nextText: 7,
      },
      {
        display: true,
        text: "Rogue",
        nextText: 8,
      },
    ],
  },
  {
    id: 6,
    text: "Ah, so you're a warrior! Here, take these as you'll need them on your journey",
    options: [
      {
        display: true,
        text: "Take greatsword and chainmail armor",
        setInventory: {
          items: { greatsword: true, chainmail: true },
        },
        nextText: 9,
      },
    ],
  },
  {
    id: 7,
    text: "Ah, so you're a mage! Here, take these as you'll need them on your journey",
    options: [
      {
        display: true,
        text: "Take Wooden Mage Staff and Armor of Agathyst",
        setInventory: {
          items: { mageStaff: true, armorOfAgathyst: true },
        },
        nextText: 9,
      },
    ],
  },
  {
    id: 8,
    text: "Ah, so you're a rogue! Here, take these as you'll need them on your journey",
    options: [
      {
        display: true,
        text: "Take shortsword and light leather armor",
        setInventory: {
          items: { shortsword: true, lightLeatherArmor: true },
        },
        nextText: 9,
      },
    ],
  },
  {
    id: 9,
    text: "Good luck, traveller!",
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
      },
    ],
  },
  {
    id: 10,
    text: "You open the door and step out into a hallway.  You can see three doors. The door you just came out of, one other door on the right, one door to your left. At the end of the hallway is a larger, more ornate door with what appears to be keyholes on it",
    options: [
      {
        display: true,
        text: "Choose the door on the left",
        nextText: 12,
      },
      {
        display: true,
        text: "Choose the door on the right",
        nextText: 13,
      },
      {
        display: true,
        text: "Choose the door at the end of the hallway",
        nextText: 14,
      },
    ],
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
      }
    ],
  },
  {
    id: 15,
    text: "this candle looks interesting enough to take",
    display: true,
    options: [
      {
        text: "take the candle",
        nextText: 12,
        setInventory: {
          items: { redCandle: true },
        },
      },
    ],
  },
  {
    id: 16,
    text: "you see one of the books looks out of place. Upon further investigation, this book is hollow! Inside, you find a mana potion and a large bronze key",
    display: true,
    options: [
      {
        text: "take the items",
        nextText: 12,
        setInventory: {
          items: { mana2: true, bronzeKey2: true },
        },
      },
    ],
  },
  {
    id: 17,
    text: "On the table, there is a large black candle. Looking around, you see some drawers. All of them are locked except one.",
    display: true,
    options: [
      {
        text: "take the black candle",
        nextText: 17,
        setInventory: {
          items: { blackCandle: true },
        },
      },
      {
        text: "open the drawer",
        nextText: 18,
      }
    ],
  },
  {
    id: 1,
    text: "In the drawer, you find another piece of the map that looks like it lines up perfectly with the piece you already have.",
    display: true,
    options: [
      {
        text: "take the map piece",
        nextText: 12,
        setInventory: {
          items: { map2: true },
        },
      },
    ],
  },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ,
];
