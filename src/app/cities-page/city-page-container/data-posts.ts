interface Posts {
  id: number;
  username: string;
  userImage: string;
  title: string;
  desc: string;
  postId: number;
}

export const posts: Posts[] = [
  {
    id: 1,
    username: 'Scott M',
    userImage: '../assets/san_francisco.png',
    title: 'SF',
    desc: `If you're going to San Francisco Be sure to wear some flowers in your hair`,
    postId: 1,
  },
  {
    id: 3,
    username: 'Edgar Three',
    userImage: '../assets/orlando.png',
    postId: 2,
    title: 'Orlando Three Title',
    desc: 'Orlando Three Desc',
  },
  {
    id: 4,
    username: 'Four',
    userImage: '../assets/orlando.png',
    title: 'Orlando Four Title',
    desc: 'Orlando Four Desc',
    postId: 2,
  },

  {
    id: 5,
    username: 'Jay',
    userImage: '../assets/phoenix.png',
    title: 'Phoenix 5 Title',
    desc: 'Phoenix 5 Desc',
    postId: 3,
  },
  {
    id: 6,
    username: 'Six',
    userImage: '../assets/phoenix.png',
    title: 'Phoenix 6 Title',
    desc: 'Phoenix 6 Desc',
    postId: 3,
  },

  {
    id: 7,
    username: 'KC',
    userImage: '../assets/chicago.png',
    title: 'The Windy City',
    desc: "It's actually not windy!",
    postId: 4,
  },
  {
    id: 8,
    username: 'Chicago Person 1',
    userImage: '../assets/chicago.png',
    title: 'Best Pizza Around!',
    desc: 'Nothing beats a Chicago style pizza!',
    postId: 4,
  },
  {
    id: 9,
    username: 'Chicago Person 2',
    userImage: '../assets/chicago.png',
    title: 'Beautiful Skyline',
    desc: 'Sunsets are my favorite by the lake',
    postId: 4,
  },
  {
    id: 10,
    username: 'Bruce Wayne',
    userImage: '../assets/chicago.png',
    title: 'I saw Batman',
    desc: 'Is this Gotham City? I thought I was in Chicago',
    postId: 4,
  },
];
