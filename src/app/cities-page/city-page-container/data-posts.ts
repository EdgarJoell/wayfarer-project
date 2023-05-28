interface Posts {
  id: number;
  username: string;
  userImage: string;
  title: string;
  desc: string;
  postId: number;
  createdAt: string;
}

export const posts: Posts[] = [
  {
    id: 1,
    username: 'Scott M',
    userImage: '../assets/user-regular.svg',
    title: 'Such a fun city!',
    desc: `If you're going to San Francisco be sure to wear some flowers in your hair`,
    postId: 1,
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    username: 'Edgar',
    userImage: '../assets/user-regular.svg',
    postId: 2,
    title: 'Good morning!',
    desc: 'Official',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    username: 'Orlando B.',
    userImage: '../assets/user-regular.svg',
    title: 'I was named after this city',
    desc: 'Come vist',
    postId: 2,
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 4,
    username: 'Jay',
    userImage: '../assets/user-regular.svg',
    title: 'Looking for a programming meme',
    desc: 'Can anyone point me in the right direction?',
    postId: 3,
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 5,
    username: 'Kayla C.',
    userImage: '../assets/user-regular.svg',
    title: 'Donwtown Phoenix',
    desc: 'Just go to scottsdale',
    postId: 3,
    createdAt: new Date().toLocaleDateString(),
  },

  {
    id: 6,
    username: 'Kanye West',
    userImage: '../assets/user-regular.svg',
    title: 'Ima let you finish',
    desc: "Yeah And you say Chi city! Chi city! Chi city!",
    postId: 4,
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 7,
    username: 'Kevin',
    userImage: '../assets/user-regular.svg',
    title: 'Best Pizza Around!',
    desc: 'Nothing beats a Chicago style pizza!',
    postId: 4,
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 8,
    username: 'Bill Murray',
    userImage: '../assets/user-regular.svg',
    title: 'Beautiful Skyline',
    desc: 'Sunsets are my favorite by the lake',
    postId: 4,
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 9,
    username: 'Bruce Wayne',
    userImage: '../assets/user-regular.svg',
    title: 'I saw Batman',
    desc: 'Is this Gotham City? I thought I was in Chicago',
    postId: 4,
    createdAt: new Date().toLocaleDateString(),
  },

  {
    id: 10,
    username: 'Kobe Bryant',
    userImage: '../assets/user-regular.svg',
    title: 'Are you a different animal and the same beast? ',
    desc: 'Come experience the Kobe System Conference ',
    postId: 5,
    createdAt: new Date().toLocaleDateString(),
  },

  {
    id: 11,
    username: 'SOAD.',
    userImage: '../assets/user-regular.svg',
    title: 'You should never trust Hollywood',
    desc: 'Those vicious streets are filled with strays',
    postId: 5,
    createdAt: new Date().toLocaleDateString(),
  },

  {
    id: 12,
    username: 'Alicia Keys',
    userImage: '../assets/user-regular.svg',
    title: 'The Empire',
    desc: 'Concrete jungle where dreams are made of',
    postId: 7,
    createdAt: new Date().toLocaleDateString(),
  },
];
