

var express = require('express');
var twitter = require('twitter');
var key = require('./auth')

var client = new twitter({
    consumer_key: key.consumer_key,
    consumer_secret: key.consumer_secret,
    access_token_key:key.access_token_key,
    access_token_secret: key.access_token_secret
});

  
var router = express.Router();

// Get feed based upon handlename
// router.get('/twitter', function(req, res, next){
//     let key = req.query.key
//     let params = {screen_name: `${key}`};
//     client.get('statuses/user_timeline', params, function(error, tweets, response) {
//         if (!error) {
//             res.json(tweets);
//         }
//       });
// });

//Post a Tweet
router.get('/tweetPost', function(req, res, next){
    let key = req.query.key
    client.post('statuses/update', {status: `${key}`}, function(error, tweet, response) {
        if (!error) {
            res.json(tweet);
        }
      });
});
// Like tweet based upon Id
router.get('/like', function(req, res, next){
    let key = req.query.key
    client.post('favorites/create', {id: `${key}`}, function(error, tweet, response) {
        if (!error) {
            res.json(tweet);
        }
      });
});
//Get all feeds based upon keyword
router.get('/search', function(req, res, next){
    let key = req.query.key
    client.get('search/tweets', {q: `${key}`}, function(error, tweets, response) {
        res.json(tweets);

     });
});




module.exports = router;