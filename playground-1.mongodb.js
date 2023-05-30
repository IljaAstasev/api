/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'IljaAstashew';
const collection = 'collection_1';

// Создание базы данных


// Создание коллекций 
db.createCollection("articles")
db.createCollection("comments")
db.createCollection("authors")


use('IljaAstashew');
// Добавление документов в коллекции
db.users.insertMany([ // создание пользователей в коллекции users
    {
      username: "alice",
      email: "alice@example.com",
      password: "password123",
      bio: "I'm an avid reader and love discussing books.",
      image: "https://i.stack.imgur.com/xHWG8.jpg"
    },
    {
        email: "jake@jake.jake",
        token: "jwt.token.here",
        username: "jake",
        bio: "I work at statefarm",
        image: null
    },
    {
      username: "bob",
      email: "bob@example.com",
      password: "password456",
      bio: "I'm a foodie and love trying out new restaurants.",
      image: "https://i.stack.imgur.com/xHWG8.jpg"
    },
    {
      username: "charlie",
      email: "charlie@example.com",
      password: "password789",
      bio: "I'm a movie buff and love watching films.",
      image: "https://i.stack.imgur.com/xHWG8.jpg"
    }
]);

// Создание комментариев к статьям в коллекции comments
db.comments.insertMany([
  {
    body: "Great article! I learned a lot.",
    createdAt: "2022-04-01T10:12:00.000Z",
    updatedAt: "2022-04-01T10:12:00.000Z",
    author: ObjectId("617d545b0aae67403e21f931"),
    article: ObjectId("617d545b0aae67403e21f933")
  },
  {
    body: "I disagree with some of the points in this article.",
    createdAt: "2022-04-02T14:20:00.000Z",
    updatedAt: "2022-04-02T14:20:00.000Z",
    author: ObjectId("617d545b0aae67403e21f932"),
    article: ObjectId("617d545b0aae67403e21f933")
  },
  {
    body: "This article didn't really teach me anything new.",
    createdAt: "2022-04-03T18:30:00.000Z",
    updatedAt: "2022-04-03T18:30:00.000Z",
    author: ObjectId("617d545b0aae67403e21f933"),
    article: ObjectId("617d545b0aae67403e21f933")
  },
  {
    body: "I'm glad I read this article. It was really informative.",
    createdAt: "2022-04-04T09:45:00.000Z",
    updatedAt: "2022-04-04T09:45:00.000Z",
    author: ObjectId("617d545b0aae67403e21f931"),
    article: ObjectId("617d545b0aae67403e21f934")
  },
  {
    body: "This article was really thought-provoking. Thanks for writing it.",
    createdAt: "2022-04-05T13:00:00.000Z",
    updatedAt: "2022-04-05T13:00:00.000Z",
    author: ObjectId("617d545b0aae67403e21f932"),
    article: ObjectId("617d545b0aae67403e21f934")
  },
  {
   body: "First comment",
   createdAt: "2016-02-18T03:22:56.637Z",
   updatedAt: "2016-02-18T03:22:56.637Z",
   author: {
      username: "jane",
      bio: "I like turtles",
      image: "https://i.stack.imgur.com/xHWG8.jpg"
  },
      article: ObjectId("6029938b24a75b8403114606")
  },
  {
      body: "Second comment",
      createdAt: "2016-02-18T03:23:56.637Z",
      updatedAt: "2016-02-18T03:23:56.637Z",
      author: {
          username: "john",
          bio: "I like cats",
          image: "https://i.stack.imgur.com/34AD2.jpg"
  },
      article: ObjectId("6029938b24a75b8403114606")
  },
  {
      body: "Third comment",
      createdAt: "2016-02-18T03:25:56.637Z",
      updatedAt: "2016-02-18T03:25:56.637Z",
      author: {
          username: "john",
          bio: "I like cats",
          image: "https://i.stack.imgur.com/34AD2.jpg"
    },
      article: ObjectId("6029938b24a75b8403114606")
    },
    {
      body: "Fifth comment",
      createdAt: "2016-02-18T03:26:56.637Z",
      updatedAt: "2016-02-18T03:26:56.637Z",
      author: {
          username: "jane",
          bio: "I like turtles",
          image: "https://i.stack.imgur.com/xHWG8.jpg"
      },
      article: ObjectId("6029938b24a75b8403114606")
  }  
]);

// создание документов
db.articles.insertOne({
    slug: "the-lion-king",
    title: "The Lion King",
    description: "The story of Simba, a young lion who is to succeed his father, Mufasa, as king of the Pride Lands.",
    body: "In the Pride Lands of Africa, a pride of lions rule over the animal kingdom from Pride Rock.",
    tagList: ["animals", "family", "adventure"],
    createdAt: "2016-02-18T04:22:56.637Z",
    updatedAt: "2016-02-18T04:48:35.824Z",
    favorited: true,
    favoritesCount: 5,
    author: {
      username: "simba",
      bio: "Future king of the Pride Lands",
      following: false
    }
})
  
db.articles.insertOne({
    slug: "the-hobbit",
    title: "The Hobbit",
    description: "The story of Bilbo Baggins, a hobbit who is recruited by the wizard Gandalf to help a group of dwarves reclaim their home from a dragon.",
    body: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar.",
    tagList: ["fantasy", "adventure"],
    createdAt: "2021-04-16T06:00:00.000Z",
    updatedAt: "2021-04-16T06:00:00.000Z",
    favorited: false,
    favoritesCount: 0,
    author: {
      username: "chef",
      bio: "I'm a professional chef and foodie"
    }
});

db.articles.insertOne({
    slug: "10-reasons-to-travel-the-world",
    title: "10 Reasons to Travel the World",
    description: "The benefits of exploring new cultures",
    body: "Traveling to new destinations is an incredible way to expand your horizons and gain a deeper understanding of the world we live in.",
    tagList: ["travel", "culture"],
    createdAt: "2021-04-19T12:00:00.000Z",
    updatedAt: "2021-04-19T12:00:00.000Z",
    favorited: false,
    favoritesCount: 0,
    author: {
        username: "traveler",
        bio: "I'm a travel enthusiast and blogger"
    }
});
      
db.articles.insertOne({
    slug: "the-importance-of-meditation",
    title: "The Importance of Meditation",
    description: "How meditation can improve your mental health",
    body: "Meditation is a powerful tool for reducing stress and anxiety, improving focus, and promoting overall wellbeing.",
    tagList: ["meditation", "mental health"],
    createdAt: "2021-04-18T10:00:00.000Z",
    updatedAt: "2021-04-18T10:00:00.000Z",
    favorited: false,
    favoritesCount: 0,
    author: {
        username: "meditator",
        bio: "I'm a meditation coach and teacher"
    }
});
    
db.articles.insertOne({
    slug: "the-benefits-of-yoga",
    title: "The Benefits of Yoga",
    description: "How yoga can improve your physical and mental health",
    body: "Yoga is a holistic practice that can help improve flexibility, strength, and balance, as well as reduce stress and anxiety.",
    tagList: ["yoga", "health"],
    createdAt: "2021-04-17T08:00:00.000Z",
    updatedAt: "2021-04-17T08:00:00.000Z",
    favorited: false,
    favoritesCount: 0,
    author: {
        username: "yogini",
        bio: "I'm a yoga teacher and practitioner"
    }
});
    
db.articles.insertOne({
    slug: "the-art-of-cooking",
    title: "The Art of Cooking",
    description: "How to create delicious and beautiful meals",
    body: "Cooking is an art form that allows you to express your creativity and nourish your body at the same time.",
    tagList: ["cooking", "food"],
    createdAt: "2021-04-16T06:00:00.000Z",
    updatedAt: "2021-04-16T06:00:00.000Z",
    favorited: false,
    favoritesCount: 0,
    author: {
        username: "chef",
        bio: "I'm a professional chef and foodie"
    }
});
    
db.articles.insertOne({
    slug: "the-benefits-of-exercise",
    title: "The Benefits of Exercise",
    description: "How exercise can improve your physical and mental health",
    body: "Regular exercise is essential for maintaining good health, reducing the risk of chronic diseases, and promoting overall wellbeing.",
    tagList: ["exercise", "health"],
    createdAt: "2021-04-16T06:00:00.000Z",
    updatedAt: "2021-04-16T06:00:00.000Z",
    favorited: false,
    favoritesCount: 0,
    author: {
        username: "chef",
        bio: "I'm a professional chef and foodie"
    }
});

db.articles.insertMany([
    {
      slug: "10-things-i-hate-about-javascript",
      title: "10 things I hate about JavaScript",
      description: "Why does JavaScript suck?",
      body: "JavaScript is a great language, but it has its issues. Here are 10 things I hate about it...",
      tagList: ["JavaScript", "programming", "web development"],
      createdAt: "2021-04-19T14:22:56.637Z",
      updatedAt: "2021-04-19T14:48:35.824Z",
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "jsdev",
        bio: "Full-stack developer",
        image: "https://example.com/jsdev.jpg"
      }
    },
    {
      slug: "the-art-of-debugging",
      title: "The art of debugging",
      description: "Mastering the art of debugging",
      body: "Debugging is an essential skill for any developer. Here are some tips and tricks to help you master the art of debugging.",
      tagList: ["debugging", "programming"],
      createdAt: "2021-04-18T09:15:00.000Z",
      updatedAt: "2021-04-18T09:15:00.000Z",
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "debugger",
        bio: "Debugger extraordinaire",
        image: "https://example.com/debugger.jpg"
      }
    },
    {
      slug: "how-to-become-a-web-developer",
      title: "How to become a web developer",
      description: "A guide to becoming a web developer",
      body: "Interested in becoming a web developer? Here's what you need to know...",
      tagList: ["web development", "programming"],
      createdAt: "2021-04-17T12:30:00.000Z",
      updatedAt: "2021-04-17T12:30:00.000Z",
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "webdev101",
        bio: "Web development enthusiast",
        image: "https://example.com/webdev101.jpg"
      }
    },
    {
      slug: "the-future-of-web-development",
      title: "The future of web development",
      description: "What's next for web development?",
      body: "Web development is constantly evolving. Here's what we can expect in the future...",
      tagList: ["web development", "future"],
      createdAt: "2021-04-16T18:45:00.000Z",
      updatedAt: "2021-04-16T18:45:00.000Z",
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "futurist",
        bio: "Web development futurist",
        image: "https://example.com/futurist.jpg"
      }
    },
    {
        slug: "article-6",
        title: "Article 6",
        description: "Description for article 6",
        body: "Body of article 6",
        tagList: ["tag1", "tag2", "tag3"],
        createdAt: "2023-04-19T12:00:00Z",
        updatedAt: "2023-04-19T12:00:00Z",
        favorited: false,
        favoritesCount: 0,
        author: {
          username: "author6",
          bio: "Bio of author6",
          image: "image6"
        }
      },
      {
        slug: "article-7",
        title: "Article 7",
        description: "Description for article 7",
        body: "Body of article 7",
        tagList: ["tag1", "tag2", "tag3"],
        createdAt: "2023-04-19T13:00:00Z",
        updatedAt: "2023-04-19T13:00:00Z",
        favorited: false,
        favoritesCount: 0,
        author: {
          username: "author7",
          bio: "Bio of author7",
          image: "image7"
        }
      },
      {
        slug: "article-8",
        title: "Article 8",
        description: "Description for article 8",
        body: "Body of article 8",
        tagList: ["tag1", "tag2", "tag3"],
        createdAt: "2023-04-19T14:00:00Z",
        updatedAt: "2023-04-19T14:00:00Z",
        favorited: false,
        favoritesCount: 0,
        author: {
          username: "author8",
          bio: "Bio of author8",
          image: "image8"
        }
      },
      {
        slug: "article-9",
        title: "Article 9",
        description: "Description for article 9",
        body: "Body of article 9",
        tagList: ["tag1", "tag2", "tag3"],
        createdAt: "2023-04-19T15:00:00Z",
        updatedAt: "2023-04-19T15:00:00Z",
        favorited: false,
        favoritesCount: 0,
        author: {
          username: "author9",
          bio: "Bio of author9",
          image: "image9"
        }
      },
      {
        slug: "article-10",
        title: "Article 10",
        description: "Description for article 10",
        body: "Body of article 10",
        tagList: ["tag1", "tag2", "tag3"],
        createdAt: "2023-04-19T16:00:00Z",
        updatedAt: "2023-04-19T16:00:00Z",
        favorited: false,
        favoritesCount: 0,
        author: {
          username: "author10",
          bio: "Bio of author10",
          image: "image10"
        }
      }
]);

// Замена на уникальный ид
const { v4: uuidv4 } = require('uuid');


db.comments.updateMany(
  { "author.username": "jake" }, // фильтр для выбора комментариев с нужным автором
  { $set: { "author.id": uuidv4() } } // оператор обновления для замены автора в комментариях на уникальный идентификатор, сгенерированный с помощью uuidv4()
);

db.comments.updateMany(
  { article: "how-to-train-your-dragon" },
  { $set: { article: ObjectId("60b698e38c3ebc069b14dce1") } }
);

db.comments.updateMany(
  {
    $or: [
      { "author.username": "jane" },
      { "author.username": "john" },
      { "author.username": "bob" },
      { "author.username": "alice" }
    ]
  },
  { $set: { "author": ObjectId() } }
);

db.article.updateMany(
  {
    $or: [
      { "author.username": "jane" },
      { "author.username": "john" },
      { "author.username": "bob" },
      { "author.username": "alice" }
    ]
  },
  { $set: { "author": ObjectId() } }
);
