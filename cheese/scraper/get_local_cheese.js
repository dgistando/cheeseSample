const fs = require('fs')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert')
const url = 'mongodb://127.0.0.1:27017/CheeseSample'

/**
 * Small version of what my scraper does to get all the data I have
 * 
 * Make sure you have a mongoDB instance running. You can change the url above
 * if yours is remote.
 * 
 * If you dont have mongoDB this application isn't going to work very well
 * 
 * (MAKE SURE YOU ARE RUNNING MONGOD BRFORE EXECUTING)
 */

function get_local_cheese(){

    MongoClient.connect(url, {useNewUrlParser: true}, function(err, client){
        assert.equal(null, err)
        console.log("DB Connected!")

        console.log(__dirname)
        var cheese = JSON.parse(fs.readFileSync(__dirname + '/cheese.json', 'utf8'))

        //I dont have price in my db yet. Here are some randomly generated numbers
        cheese = cheese.map(entity => {
            entity.Price = ((Math.random() * (18 - 13)) + 13).toFixed(2)
            return entity
        })

    var db = client.db('CheeseSample');
    const infoCollection = db.collection('info')

        infoCollection
            .insert(cheese, (e, result) => {
                assert.equal(e,null)
                assert.equal(cheese.length, result.result.n)
            })

            //The majority of the queries I plan will use these keys
            infoCollection.createIndex({Name : 1, Type : 1})

        client.close();
        console.log("You have some cheese now!!")
    })
}

module.exports = {
    get_local_cheese
}