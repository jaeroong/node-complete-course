const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1/TodoApp', (err, client) => {
  if (err) {
      return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //     console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //     console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
  //     console.log(result);
  // });

  db.collection('Users').deleteOne({name:'Rodrigo Zanetta'});

  // db.collection('Users').findOneAndDelete({_id: new ObjectID("5b66a59717844b669b64f083")}).then((result =>{
  //   console.log(JSON.stringify(result, undefined, 2));
  // }));

  client.close();
})