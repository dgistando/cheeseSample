import React, {Component} from 'react'
import {Grid, Row, Col, Image} from 'react-bootstrap'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectCheese, searchCheese} from '../actions/index';

import {withRouter} from 'react-router-dom'

import _ from '../htmlDecode'


/**
 *  This page initially shows 15 random cheeses from
 *  all of the cheeses. You can click on them and it
 *  takes you to the detail page.
 * 
 *  After you've made asearch this page will display 15 of
 *  the cheeses from your search instead. A form of recent
 *  search.
 * 
 */
const LENGTH = 15
const ROWS = 5

class CheeseGrid extends Component{

    renderColumns(cheeseItem, i){
        if(i > LENGTH/ROWS) return <div></div>


        return(
            <Col key={i} xs={12} md={4}>
                <div onClick={() => {
                        this.props.selectCheese(cheeseItem)
                        this.props.history.push(`/cheeseSample/Cheeses`)
                    }} className="homeCheese"
                    >
                        <div  className="boldLarge">{_(cheeseItem.Name)}</div>
                        
                    <Image style={{'borderRadius':'10px', 'margin':'auto', 'objectFit':'cover'}} src={require('../cheeseShop_images'+cheeseItem.Img)} height="250" width="325" />
                </div>
            </Col>
        );
    }

    renderRows(CheeseRow, i){
        return(
            <Row key={i} className="show-grid">
                {CheeseRow.map(this.renderColumns, this)}
            </Row>
        );
    }

    render(){
        if(!this.props.Cheeses) 
            return <div>Getting more cheese...</div>

        var dArr = makeDarr(this.props.Cheeses, LENGTH, ROWS)
        return(
                <Grid>
                    {dArr.map(this.renderRows, this)}
                </Grid>
        );
    }

}

function mapStateToProps({Cheeses}) {
    //In the case that there is nothing in the list and
    //someone tries to go back to the home page.
    //Basically waits until there is data to call render.
    if(!Cheeses[0] || Cheeses[0].length < LENGTH)return{};

    return {
        Cheeses : Cheeses[0]
    };
} 

function mapDispatchtoProps(dispatch){
    return bindActionCreators({
        selectCheese,
        searchCheese
    }, dispatch)
}

//Makes the array a double array for the grid
//you can specify the size fo the array and the
//number of rows intended
function makeDarr(Cheeses, length, rows){

    let randCheeses = getRandom(Cheeses, length)
    let columns = randCheeses.length/rows
    let dArr = []

    for(var i=0, j=0; i < randCheeses.length; i+=columns){
        j+=columns
        dArr.push(randCheeses.slice(i, j))
    }
    
    return dArr;
}

function getRandom(arr, n) {
    
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("not that many elements available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }

    return result;
}

export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(CheeseGrid))