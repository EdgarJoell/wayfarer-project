interface Posts {
  id: number;
  userName: string;
  userImage: string;
  title: string;
  desc: string;
  postId: number;
}

export const posts: Posts[] = [
  {
    id: 1,
    userName: 'Scott M',
    userImage: '',
    title: 'SF',
    desc: `If you're going to San Francisco Be sure to wear some flowers in your hair`,
    postId: 1,
  },
  {
    id: 3,
    userName: 'Edgar Three',
    userImage: '',
    postId: 2,
    title: 'Orlando Three Title',
    desc: 'Orlando Three Desc',
  },
  {
    id: 4,
    userName: 'Four',
    userImage: '',
    title: 'Orlando Four Title',
    desc: 'Orlando Four Title',
    postId: 2,
  },

  {
    id: 5,
    userName: 'Jay',
    userImage: '',
    title: 'Phoenix 5 Title',
    desc: 'Phoenix 5 Desc',
    postId: 3,
  },
  {
    id: 6,
    userName: 'Six',
    userImage: '',
    title: 'Phoenix 6 Title',
    desc: 'Phoenix 6 Desc',
    postId: 3,
  },

  {
    id: 7,
    userName: 'KC',
    userImage: '',
    title: 'The Windy City',
    desc: "It's actually not windy!",
    postId: 4,
  },
  {
    id: 8,
    userName: 'Chicago Person 1',
    userImage: '',
    title: 'Best Pizza Around!',
    desc: 'Nothing beats a Chicago style pizza!',
    postId: 4,
  },
  {
    id: 9,
    userName: 'Chicago Person 2',
    userImage: '',
    title: 'Beautiful Skyline',
    desc: 'Sunsets are may favorite time of day by the lake',
    postId: 4,
  },
  {
    id: 10,
    userName: 'Bruce Wayne',
    userImage: '',
    title: 'I saw Batman',
    desc: 'Is this Gotham City? I thought I was in Chicago',
    postId: 4,
  },
];
