import React, {Component} from 'react'

import {Button, Image} from 'react-bootstrap'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {withRouter} from 'react-router-dom'

import {removeItem} from '../actions/index'


/**
 *  The cart page is in the same format as the rest
 *  It doesn't have any functionality except for giving
 *  the totals for what you have in your cart.
 */

class Cart extends Component {

    getItems(item, i){
        return(
            <li
                key={item.Name}
                className={"list-group-item"}
            >
            <div className={'costContainer'}>
                <h2 className={'left'}>
                {item.Name}
                <span style={{'margin': '0 0 0 10px'}} className="badge badge-primary badge-pill">{item.Quantity}</span>
                <Image style={{'padding': '10px 0 0 10px'}} src={require('../cheeseShop_images'+item.Img)} height="150" width="150" responsive />
                <Button onClick={() => {
                    this.props.removeItem(window.navigator.userAgent.replace(/\D+/g,''), item.Name)
                    location.reload()
                    }} bsSize={'small'} bsStyle={'link'}>Delete</Button>
                </h2>

                <div className={'right boldLarge'}>
                    {`$${(item.Quantity*item.Price).toFixed(2)}`}
                </div>
            </div>
            </li>
        );
    }

    render(){
        if(!this.props.inCart || this.props.inCart.length === 0){
            return(
                <div>You're cart is empty!!</div>
            );
         }

         return(
            <div>
                <ul className="list-group list-group-flush">
                    {this.props.inCart.map(this.getItems, this)}
                </ul>

                <div className='costContainer'>
                    <div className='left boldLarge'>Subtotal : </div>
                    
                    <div style={{'padding': '0 0 0 0'}} className='right boldLarge'>
                        {'$'+(this.props.inCart.reduce((total, item) => {return total += (item.Quantity * item.Price)}, 0.0)).toFixed(2)}
                    </div>
                </div>

                <Button className='checkOut' onClick={() => {location.href='https://github.com/dgistando'}} bsSize="large" bsStyle="success">Checkout</Button>
            </div>
        );
    }
}

function mapStateToProps({inCart}){
    return {inCart};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        removeItem : removeItem
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))
