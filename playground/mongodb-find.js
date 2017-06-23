const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('594589ad389abe77dde7797b')
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err)=> {
    //     console.log(err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(JSON.stringify(count, undefined,2));
    }, (err)=> {
        console.log(err);
    });

    // db.close();
});
    