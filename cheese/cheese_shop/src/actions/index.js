import fetch from 'isomorphic-fetch';

//connection to the api
const ROOT_URL = 'http://localhost:4000?'

export const SEARCH_CHEESE = 'SEARCH_CHEESE'
export const SELECT_CHEESE = 'SELECT_CHEESE'

export const INSERT_CART = 'INSERT_CART'
export const GET_CART = 'GET_CART'

export function searchCheese(cheese){

    const SearchQuery = `
    query{
        Search(search : "${cheese}"){
            Name
            Img
            Price
            Made
            Type
            Colour
            Flavour
            Calcium_content
            Fat_content
            Aroma
            Vegetarian
            Producers
            Synonyms
        }
    }`

    //The data is there, but burried deep in a promise
    return {
        type : SEARCH_CHEESE,
        payload : getData(SearchQuery).then(Response => Response.json()) //list of cheeses
    };
}

export function insertIntoCart(myId, Name, Quantity, Price, Img){
    const insertIntoCartQuery = `
    mutation{
        addItem(
          myId : "${myId}"
          Name : "${Name}"
          Quantity : ${Quantity}
          Price : ${Price}
          Img : "${Img}"
        ){
          myId
          items{
            Name
            Quantity
            Price
            Img
          }
        }
      }
    `
    return{
        type: GET_CART,
        payload: getData(insertIntoCartQuery).then(Response => Response.json()).then(json => {
            return getCart(myId).payload
        }).catch(err => {
            //console.log(err)
        })
    };
}

export function getCart(myId){
    const getCartQuery = `
    query{
        GetCart(myId:"${myId}"){
          myId
          items{
            Name
            Quantity
            Price
            Img
          }
        }
      }
    `
    return{
        type: GET_CART,
        payload: getData(getCartQuery).then(Response => Response.json())
    };
}

export function removeItem(myId, Name){
    const removeItemQuery = `
    mutation{
        reomveItem(myId:"${myId}" Name:"${Name}"){
              myId
          items{
            Name
            Quantity
            Price
            Img
          }
        }
      }
    `
    getData(removeItemQuery).then(Response => Response.json()).then(json => {
        //console.log(json.data.updateItem,' removed from Cart')
    })
    return {
        type: GET_CART,
        payload : getCart(myId).payload
    };
}

export function selectCheese(cheeseItem){
    return {
        type : SELECT_CHEESE,
        payload : cheeseItem
    };
}

function getData(query){
    return(
        fetch(ROOT_URL ,{
            method:'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({"query" : query})
        })
    )
}
