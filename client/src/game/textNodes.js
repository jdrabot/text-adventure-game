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
                optionsToDisplayFalse: [0,1]
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
    }
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
                optionsToDisplayFalse: [0,1]
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
                optionsToDisplayFalse: [0,1]
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
];
