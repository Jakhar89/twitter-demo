const axios = require('axios');
var twitter = require('twitter');

var client = new twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
});

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema,
    GraphQLFloat

  } = require('graphql');
  
  // Launch Type
  const timeLineType = new GraphQLObjectType({
    name: 'Timeline', 
    fields: () => ({
        id: { type: GraphQLFloat },
        id_str: { type: GraphQLString },
        favourited: { type: GraphQLBoolean },
        text: { type: GraphQLString },
        user:{type: User}
    })
  });
  
  // Rocket Type
  const User = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      name: { type: GraphQLString }
    })
  });
  
  // Root Query
  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      timelines: {
        type: new GraphQLList(timeLineType),
        args:{
            screen_name: {type: GraphQLString}
        },
        
        resolve(parent, args) {
            //console.log(args.screen_name)
            let para ={screen_name: args.screen_name}
            return client.get('statuses/user_timeline', para)
            .then(res => res);
        }
      }
    }
  });
  
  module.exports = new GraphQLSchema({
    query: RootQuery
  });