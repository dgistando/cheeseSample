import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectCheese} from '../actions/index'; 
import {bindActionCreators} from 'redux';

import {ListGroup, ListGroupItem} from 'react-bootstrap'

import _ from '../htmlDecode'
import '../index.css'
/**
 * The list component thta just displays the cheese names
 * as a result of the search. I have plans the add the images
 * next to the name in the list or possibly make cards. 
 */
class CheeseList extends Component{
    constructor(props){
       super(props);

       this.onCheeseSelect = this.onCheeseSelect.bind(this)
    }


    onCheeseSelect(cheeseItem, event){
        event.preventDefault();

        this.props.selectCheese(cheeseItem)
    }

    getList(){
        if(!this.props.Cheeses[0] || this.props.Cheeses[0].length === 0){
            //console.log("Nothing in list")
            return <h4>Sorry that cheese isn't here</h4>
        }

        return (
            this.props.Cheeses[0].map( cheeseItem => {
                return (
                    <ListGroupItem
                        key={_(cheeseItem.Name)}
                        href={cheeseItem.Name.toString()}
                        onClick={this.onCheeseSelect.bind(this, cheeseItem)}
                    >{_(cheeseItem.Name)}</ListGroupItem>
                );
            })
        )
    }

    render(){
        
        return(
                <ListGroup id="cheeseList">
                    {this.getList()}
                </ListGroup>
        )
    }
}

//Anything that comes from here becomes props in list
function matchDispatchToProps(dispatch){
    //when selectedCheese is called is comes here and is passed to the reducers
    //console.log("dispatching select Cheese")
    return bindActionCreators({
        selectCheese : selectCheese
    }, dispatch)
}

function mapStateToProps({Cheeses}) {
    return {Cheeses};
} 

            //takes a function and a data type and assigns to props as state
export default connect(mapStateToProps, matchDispatchToProps)(CheeseList)