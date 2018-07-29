var express = require('express');
var graphql = require('graphql')
var graphQLHTTP = require('express-graphql') 

/**
 *  This is the graphql endpoint of the aplication.
 *  The graphQL types are defined here. I usually put
 *  these in a separate file, there's only one here.
 */
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList
} = require('graphql/type')


//This is the place that I would add more db sources.
//That way the GrqphQL can be more dynamic for the front end.
const Info = require('./schema').Info
const Cart = require('./schema').Cart

var itemType = new GraphQLObjectType({
    name : 'item',
    fields : function(){
        return {
            Name : {
                type : graphql.GraphQLString
            },
            Quantity : {
                type : graphql.GraphQLInt
            },
            Price : {
                type : graphql.GraphQLFloat
            },
            Img : {
                type : graphql.GraphQLString
            }
        }
    }
})

var cartType = new GraphQLObjectType({
    name  : 'myCart',
    fields: function(){
        return {
            myId : {
                type : graphql.GraphQLString
            },
            items : {
                type : graphql.GraphQLList(itemType)
            }
        }
    }
})

var CheeseType = new GraphQLObjectType({
    name : 'cheese',
    fields : function(){
        return {
            Name : {
                type : graphql.GraphQLString
            },
            Link : {
                type : graphql.GraphQLString
            },
            Img : {
                type : graphql.GraphQLString
            },
            Made : {
                type : graphql.GraphQLString
            },
            Country_of_origin : {
                type : graphql.GraphQLString
            },
            Family : {
                type : graphql.GraphQLString
            },
            Type : {
                type : graphql.GraphQLString
            },
            Fat_content : {
                type : graphql.GraphQLString
            },
            Calcium_content : {
                type : graphql.GraphQLString
            },
            Texture : {
                type : graphql.GraphQLString
            },
            Rind : {
                type : graphql.GraphQLString
            },
            Colour : {
                type : graphql.GraphQLString
            },
            Flavour : {
                type : graphql.GraphQLString
            },
            Aroma : {
                type : graphql.GraphQLString
            },
            Vegetarian : {
                type : graphql.GraphQLString
            },
            Producers : {
                type : graphql.GraphQLString
            },
            Synonyms : {
                type : graphql.GraphQLString
            },
            Alternative_spelling : {
                type : graphql.GraphQLString
            },
            Fat_dry : {
                type : graphql.GraphQLString
            },
            Price : {
                type : graphql.GraphQLFloat
            }
        }
    }
});

var mutationType = new graphql.GraphQLObjectType({
    name:'Mutation',
    fields:() => ({
        addItem: {
            //returns the old cart
            type: cartType,
            args:{
                 myId : {type : graphql.GraphQLString},
                 Name : {type : graphql.GraphQLString},
                 Quantity : {type : graphql.GraphQLInt},
                 Price : {type : graphql.GraphQLFloat},
                 Img : {type : graphql.GraphQLString}
            },
            resolve : (_, {myId, Name, Quantity, Price, Img}) => {
                return new Promise((resolve, reject) => {
                    Cart.findOne({myId}, (err, cart) => {

                        var item = {
                            Name,
                            Quantity,
                            Price,
                            Img
                        }

                        //maybe new customer
                        if(!err){
                            if(cart === undefined || cart === null){
                                //new
                                new Cart({
                                    myId,
                                    items : [item]
                                }).save((err, result)  => {
                                    (err) ? reject(err) : resolve(result)
                                })                                
                            }else{//not new

                                //new item?
                                //check to see if the list has the item already

                                if(!cart.items.some(e => e.Name === item.Name)){
                                    cart.items.push(item)
                                }else{
                                    cart.items = cart.items.map(element => {
                                        if(element.Name === item.Name){
                                            var newQuantity = element
                                            newQuantity.Quantity += item.Quantity
                                            return newQuantity
                                        }
                                        return element;
                                    })
                                }

                                Cart.findOneAndUpdate({myId}, cart, (err, result) => {
                                    (err) ? reject(err) : resolve(result)
                                })
                            }

                        }else{
                            reject(err)
                        }
                    })
                })
            }
        },       
        
        //returns the new shopping list
        reomveItem: {
            type: cartType,
            args:{
                 myId : {type : graphql.GraphQLString},
                 Name : {type : graphql.GraphQLString}
            },
            resolve : (_, {myId, Name}) => {
                return new Promise((resolve, reject) => {
                    Cart.findOne({myId}, (err, res) => {
                        if(err) reject(err)

                        res.items.splice(res.items.findIndex(e => e.Name === Name), 1)

                        res.save((err, result) => {
                            (err) ? reject(err) : resolve(result)
                        })
                     })
                })
            }
        },
    })
})

//These are the query definitions fro graphQL
var queryType = new graphql.GraphQLObjectType({
    name:'Query',
    fields : () => ({
        //This query just gets all the cheeses
        getAllCheese: {
            type: new GraphQLList(CheeseType),
            //The resolver is where the actual db call is made.
            resolve : () => {
                return new Promise((resolve, reject) => {
                    Info.find((err, cheese) => {
                        err ? reject(err) : resolve(cheese)
                    })
                })
            }
        },

        //searches by name any matching string
        Search : {
            type: new GraphQLList(CheeseType),
            args: {
                search : {type : graphql.GraphQLString}
            },
            resolve : (_, {search}) => {
                return new Promise((resolve, reject) => {

                    //make sure it doesn't matter what is put in
                    search = search.charAt(0).toUpperCase() + search.slice(1)

                    Info.find({Name : new RegExp(search)}, (err, cheese) => {
                        err ? reject(err) : resolve(cheese)
                    })
                })
            }
        },

        //searches name, but only first letter. upper or lower
        letterSearch : {
            //Make sure there is a check before this for
            // length of the string == 1
            type: new GraphQLList(CheeseType),
            args: {
                letter : {type : graphql.GraphQLInt}
            },
            resolve : (_, {letter}) => {
                return new Promise((resolve, reject) => {

                    var letters = String.fromCharCode(letter).toLowerCase() + String.fromCharCode(letter).toUpperCase()

                    Info.find({Name : new RegExp(`^[${letters}].*`)}, (err, cheese) => {
                        err ? reject(err) : resolve(cheese)
                    })
                })
            }
        },

        //Search by feel / type
        // data looks like this; Type : " soft, artisan, <other descriptive word>" 
        TypeSearch : {
            //try to get comma separated list
            type: new GraphQLList(CheeseType),
            args: {
                desc : {type : graphql.GraphQLString}
            },
            resolve : (_, {desc}) => {
                return new Promise((resolve, reject) => {
                    desc = desc.replace(' ','');
                    var descriptions = desc.split(',')
                        
                    console.log(descriptions)
                    
                    Info.find({Type : {$in : descriptions.map(x => {
                        return new RegExp(x)
                    })}}, (err, cheese) => {
                        err ? reject(err) : resolve(cheese)
                    })
                })
            }
        },

        GetCart: {
            type: cartType,
            args :{ 
               myId : {type : graphql.GraphQLString}
            },
            resolve : (_, {myId}) => {
                return new Promise((resolve, reject) => {
                    Cart.findOne({myId}, (err, cart ) => {
                        if(err) reject(err)

                        if(cart === null)
                            cart = {
                                myId,
                                items : []
                            }

                        resolve(cart)
                    })
                })
            }
        },
    })
});

var schema = new GraphQLSchema({
    query : queryType,
    mutation : mutationType
})

const cors = require('cors');

var app = express();
app.use('/', cors(), graphQLHTTP({
    schema, 
    pretty : true,
    graphiql: true, }));//use http://localhost:4000/graphql to test the queries
app.listen(4000, (err) => console.log('listening on :4000...'));

