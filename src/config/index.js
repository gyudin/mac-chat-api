import mongodb from 'mongodb';

export default {
  //"port": 3005,
  //"mongoUrl": "mongodb://localhost:27017/chat-api",
   "port": process.env.PORT,
   "mongoUrl": "mongodb://georgey:Mozkai2!@ds147073.mlab.com:47073/heroku_88hjscpb",
  "bodyLimit": "100kb"
}
