const fs = require('fs');
const posts = require('./posts.json');
const comments = require('./comments.json');
const firebaseKey = require('firebase-key');
var util = require('util');

const convertedPosts = posts.posts.reduce((acc, curr) => {
  acc[curr.code] = {
    caption: curr.caption,
    likes: curr.likes,
    id: curr.id,
    display_src: curr.display_src,
    comments: comments[curr.code] && comments[curr.code].reduce((acc, curr) => {
      curr.timestamp = new Date().getTime()
      acc[firebaseKey.key()] = curr;
      return acc;
    }, {})
  };

  return acc;
}, {});

const output = {
  posts: convertedPosts
};
fs.writeFileSync(__dirname + '/dataForFirebase.json', JSON.stringify(output));