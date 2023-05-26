interface Cities {
    id: number,
    name: string,
    country: string,
    image: string,
}

export const cities: Cities[] = [
  {
    id: 1,
    name: 'San Francisco',
    country: 'United States',
    image: '../assets/san_francisco.png',
  },
  {
    id: 2,
    name: 'Orlando',
    country: 'United States',
    image: '../assets/orlando.png',
  },
  {
    id: 3,
    name: 'Phoenix',
    country: 'United States',
    image: '../assets/phoenix.png',

  },
  {
    id: 4,
    name: 'Chicago',
    country: 'United States',
    image: '../assets/chicago.png',
  },
];
