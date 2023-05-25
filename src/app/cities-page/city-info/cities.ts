interface Posts {
    id: number,
    userName: string,
    userImage: string,
    postTitle: string,
    postDesc: string
}

interface Cities {
    id: number,
    name: string,
    country: string,
    image: string,
    posts: Posts[]
}

export const cities: Cities[] = [
  {
    id: 1,
    name: 'San Francisco',
    country: 'United States',
    image: '',
    posts: [
      {
        id: 1,
        userName: 'One',
        userImage: '',
        postTitle: 'Post Title 1 for Post ID 1',
        postDesc: 'Post Desc 1 for Post ID 1',
      },
      {
        id: 2,
        userName: 'Two',
        userImage: '',
        postTitle: 'Post Title 2 for Post ID 1',
        postDesc: 'Post Desc 2 for Post ID 1',
      },
    ],
  },
  {
    id: 2,
    name: 'Orlando',
    country: 'United States',
    image: '',
    posts: [
      {
        id: 3,
        userName: 'Edgar Three',
        userImage: '',
        postTitle: 'Post Title 3 for Post ID 2',
        postDesc: 'Post Desc 3 for Post ID 2',
      },
      {
        id: 4,
        userName: 'Four',
        userImage: '',
        postTitle: 'Post Title 4 for Post ID 2',
        postDesc: 'Post Desc 4 for Post ID 2',
      },
    ],
  },
  {
    id: 3,
    name: 'Phoenix',
    country: 'United States',
    image: '',
    posts: [
      {
        id: 5,
        userName: 'JayPadillaDEV Five',
        userImage: '',
        postTitle: 'Post Title 5 for Post ID 3',
        postDesc: 'Post Desc 5 for Post ID 3',
      },
      {
        id: 6,
        userName: 'Six',
        userImage: '',
        postTitle: 'Post Title 6 for Post ID 3',
        postDesc: 'Post Desc 6 for Post ID 3',
      },
    ],
  },
  {
    id: 4,
    name: 'Chicago',
    country: 'United States',
    image: '',
    posts: [
      {
        id: 7,
        userName: 'KC Seven',
        userImage: '',
        postTitle: 'Post Title 7 for Post ID 4',
        postDesc: 'Post Desc 7 for Post ID 4',
      },
      {
        id: 8,
        userName: 'Eight',
        userImage: '',
        postTitle: 'Post Title 8 for Post ID 4',
        postDesc: 'Post Desc 8 for Post ID 4',
      },
    ],
  },
];
