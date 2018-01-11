const express = require('express');
const router = express.Router();
const redis = require('redis');
const client = redis.createClient({
  host: 'localhost',
  port: 6379
});

client.on('error', (err) => {
  console.log(err);
});

let links;

client.get('links', (err, data) => {
  if (err) {
    console.log(err)
  }
  if (data) {
    links = JSON.parse(data);
  } else {
    links = [];
  }
});

const groups = [
  {
    id: 0,
    name: "Group A"
  },
  {
    id: 1,
    name: "Group B"
  },
  {
    id: 2,
    name: "Group C"
  }
]

const users = [
  {
    id: 0,
    name: "John Doe",
    email: "john.doe@gmail.com",
    password: "123456"
  },
  {
    id: 1,
    name: "Chan Siu Ming",
    email: "chan.siu.ming@gmail.com",
    password: "123456"
  },
  {
    id: 2,
    name: "Juan Nadie",
    email: "juan.nadie@gmail.com",
    password: "123456"
  }
]

router.get('/groups', (req, res) => {
  res.json(groups);
});

router.get('/users', (req, res) => {
  res.json(users);
});

router.get('/links', (req, res) => {
  client.get('links', (err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});

router.post('/link'), (req, res) => {
  console.log("posting");
  let link = {
    title: req.body.title,
    url: req.body.url,
    tags: req.body.tags
  }
  links.unshift(link);
  client.set('links', JSON.stringify(links), (err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(link);
  });
}

router.delete('/link/:title'), (req, res) => {
  let title = req.params.title;
  for (let i = 0; i < links.length; i++) {
    if (title == links[i].title) {
      links.splice(i, 1)
    } else {
      client.set('links', JSON.stringify(links), (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.json(link);
        }
      });
    }
  }
}

module.exports = router;