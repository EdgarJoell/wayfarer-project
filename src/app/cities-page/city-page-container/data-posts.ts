interface Posts {
  id: number;
  postId: number;
  username: string;
  userImage: string;
  title: string;
  desc: string;
  createdAt: string;
}

let userImageSVG: string =
  'https://wayfarer-mini-project.s3.amazonaws.com/user-regular.svg';

export const posts: Posts[] = [
  {
    id: 1,
    postId: 1,
    username: 'Scott M',
    userImage: userImageSVG,
    title: 'Such a fun city!',
    desc: `If you're going to San Francisco be sure to wear some flowers in your hair`,
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    postId: 2,
    username: 'Edgar',
    userImage: userImageSVG,
    title: 'Official',
    desc: 'Good morning!',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    postId: 2,
    username: 'Orlando B.',
    userImage: userImageSVG,
    title: 'I was named after this city',
    desc: 'Come visit',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 4,
    postId: 3,
    username: 'Jay',
    userImage: userImageSVG,
    title: 'Looking for a programming meme',
    desc: 'Can anyone point me in the right direction?',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 5,
    postId: 3,
    username: 'Kayla C.',
    userImage: userImageSVG,
    title: 'Downtown Phoenix',
    desc: 'Just go to scottsdale',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 6,
    postId: 4,
    username: 'Kanye West',
    userImage: userImageSVG,
    title: 'Ima let you finish',
    desc: 'Yeah And you say Chi city! Chi city! Chi city!',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 7,
    postId: 4,
    username: 'Kevin',
    userImage: userImageSVG,
    title: 'Best Pizza Around!',
    desc: 'Nothing beats a Chicago style pizza!',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 8,
    postId: 4,
    username: 'Bill Murray',
    userImage: userImageSVG,
    title: 'Beautiful Skyline',
    desc: 'Sunsets are my favorite by the lake',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 9,
    postId: 4,
    username: 'Bruce Wayne',
    userImage: userImageSVG,
    title: 'I saw Batman',
    desc: 'Is this Gotham City? I thought I was in Chicago',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 10,
    postId: 5,
    username: 'Kobe Bryant',
    userImage: userImageSVG,
    title: 'Are you a different animal and the same beast? ',
    desc: 'Come experience the Kobe System Conference ',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 11,
    postId: 5,
    username: 'SOAD.',
    userImage: userImageSVG,
    title: 'You should never trust Hollywood',
    desc: 'Those vicious streets are filled with strays',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 12,
    postId: 7,
    username: 'Alicia Keys',
    userImage: userImageSVG,
    title: 'The Empire',
    desc: 'Concrete jungle where dreams are made of',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 13,
    postId: 1,
    username: 'Lou Bega',
    userImage: userImageSVG,
    title:
      '1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 1234 9876 98764321',
    desc: 'Ladies and gentlemen, this is Mambo number ',
    createdAt: new Date().toLocaleDateString(),
  },
];
