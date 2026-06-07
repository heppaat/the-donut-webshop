export type Donut = {
  id: number;
  name: string;
  flavor: string;
  price: number;
  /** Hue 0–360: tints the card background and hue-rotates the shared donut image. */
  hue: number;
  tag: string | null;
};

export const DONUTS: Donut[] = [
  {
    id: 1,
    name: "Pink Sprinkle",
    flavor: "Strawberry glaze · rainbow sprinkles",
    price: 3.5,
    hue: 320,
    tag: "★ best seller",
  },
  {
    id: 2,
    name: "Blueberry Hour",
    flavor: "Wild blueberry · turquoise dust",
    price: 3.75,
    hue: 195,
    tag: "new",
  },
  {
    id: 3,
    name: "Matcha Mood",
    flavor: "Stone-ground matcha · white chocolate",
    price: 4.0,
    hue: 110,
    tag: "limited",
  },
  {
    id: 4,
    name: "Cocoa Riot",
    flavor: "70% dark · cocoa nibs",
    price: 3.5,
    hue: 25,
    tag: null,
  },
  {
    id: 5,
    name: "Lemon Static",
    flavor: "Sicilian lemon · poppy seeds",
    price: 3.75,
    hue: 55,
    tag: null,
  },
  {
    id: 6,
    name: "Lavender Daze",
    flavor: "Honey lavender · edible flowers",
    price: 4.25,
    hue: 270,
    tag: "new",
  },
];
