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
    } else {
      res.json(JSON.parse(data));
    }
  });
});

router.post('/link', (req, res) => {
  let link = {
    title: req.body.title,
    url: req.body.url,
    tags: req.body.tags
  }
  links.unshift(link);
  client.set('links', JSON.stringify(links), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(link);
    }
  });
});

router.delete('/link/:title', (req, res) => {
  let found = false;
  let title = req.params.title;
  for (let i = 0; i < links.length; i++) {
    if (title == links[i].title) {
      found = true;
      links.splice(i, 1);
      client.set('links', JSON.stringify(links), (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.json();
        }
      });
    }
  }
  if (!found) {
    res.sendStatus(404);
  }
});

module.exports = router;