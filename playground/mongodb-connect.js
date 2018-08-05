const {MongoClient} = require('mongodb');


    

MongoClient.connect('mongodb://localhost/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.', err);
  }
  console.log('Connected to MongoDB server.');

  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
      if (err) {
    return console.log('Unable to insert to do', err);
  }
  console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.collection('Users').insertOne({
  
    name: 'Rodrigo Zanetta',
    age: 28,
    location: 'NJ'
  }, (err, result) => {
    if (err) {
        return console.log('Unable to insert User.');
  }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

    client.close();
});