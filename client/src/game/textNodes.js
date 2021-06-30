export default [
  {
    id: 1,
    text: "You wake up in a strange place...",
    options: [
      {
        text: "Take goo",
        setState: { blueGoo: true },
        nextText: 2,
      },
      {
        text: "Leave the goo",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "You venture forth...",
    options: [
      {
        text: "Trade goo for sword",
        setState: { blueGoo: false, sword: true },
        nextText: 3,
      },
      {
        text: "Trade goo for sword",
        setState: { blueGoo: false, shield: true },
        nextText: 3,
      },
      {
        text: "Ignore the merchant",
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "After leaving the merchant, you start to feel tired and stumble upon a small town next to a dangerous looking castle,",
    options: [
      {
        text: "Explore the castle",
        nextText: 4,
      },
      {
        text: "Find a room to sleep at in the town",
        nextText: 5,
      },
      {
        text: "Find some hay in a stable to sleep in",
        nextText: 6,
      },
    ],
  },
  {
    id: 4,
    text: "You are tired and fall asleep while exploring the castle and are killed by some terrible monster in you sleep",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
];
