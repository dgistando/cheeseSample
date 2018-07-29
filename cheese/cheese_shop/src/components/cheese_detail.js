import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Image} from 'react-bootstrap'
import {bindActionCreators} from 'redux'

import {insertIntoCart, getCart, updateCart} from '../actions/index'

import {withRouter} from 'react-router-dom'

import _ from '../htmlDecode'
import '../index.css'
import icon from '../cheeseShop_images/icons'

class CheeseDetail extends Component{

    constructor(props){
        super(props);

        this.state = {
            quantity : 0,
            myId : window.navigator.userAgent.replace(/\D+/g,'')
        };

        this.onQuantityChange = this.onQuantityChange.bind(this)
    }

    //A function to help display any of the information.
    //some of the cheeses have no flavour information so I have
    //to take those keys and values out.
    extractValidData(){
        return (
            //First 3 are name, image, and Price
            Object.keys(this.props.Cheese).slice(3).map( (detail, i) => {
                if(!this.props.Cheese[detail]){
                    return <div key={i}></div>
                }else{
                    return <li className={'list-group-item borderless'} key={i}>
                                <span className={"detailLabel"}>
                                <img src={icon(detail)}
                                    height="20"
                                    width="20"
                                    alt={detail}
                                />
                                    {" "+detail.replace('_',' ')}
                                </span>

                                {" : "+ this.props.Cheese[detail]}
                                
                            </li>
                }
            })
        )
    }

    onQuantityChange(event){
        event.preventDefault();

        var target = event.target.id

        switch(target){
            case '-':
                this.setState({quantity : (this.state.quantity <= 0) ? 0 : this.state.quantity-1})
            break;
            case '+':
                this.setState({quantity : this.state.quantity+1})
            break;
            case 'toCart':
                var name = this.props.Cheese.Name;
                var quantity = this.state.quantity;
                var price = this.props.Cheese.Price;
                var Img = this.props.Cheese.Img;

                var myId = this.state.myId

                if(quantity > 0 && name){
                    this.props.insertIntoCart(myId, name, quantity, price, Img)
                    this.setState({quantity : 0})
                }
            break;
            default:
        }
    }

    render(){
        if(!this.props.Cheese)return <div></div>;

        return(
            <div>
                <div id="TitleInfo">
                    <h2>{`${_(this.props.Cheese.Name)} \t\t\t   $${this.props.Cheese.Price}/lb.`}</h2>
                    <Image  src={require('../cheeseShop_images'+this.props.Cheese.Img)} height="350" width="350" responsive />
                </div>

                <ul className={"list-group"}>{this.extractValidData()}</ul>

                <form>
                    <label htmlFor="Cart"><h4>Select Quantity</h4></label>
                    <div className="form-group">
                        <button className="quantity btn btn-warning" id="-" onClick={this.onQuantityChange}>-</button>
                        <input className="quantity form-control " type="text" id="quantity" value={this.state.quantity}/>
                        <button className="quantity btn btn-warning" id="+" onClick={this.onQuantityChange}>+</button>
                    </div>

                    <button type="submit" id={'toCart'} className="btn btn-primary btn-lg" onClick={this.onQuantityChange} style={{'minWidth':'175px'}}>Add To Cart</button>
                </form>

            </div> 
        );
    }
}

function mapStateToProps(state){
    return {
        Cheese : state.ActiveCheese,
        inCart : state.inCart
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
            insertIntoCart : insertIntoCart,
            getCart : getCart,
            updateCart : updateCart
        }, dispatch)
}

export default  withRouter(connect(mapStateToProps, matchDispatchToProps)(CheeseDetail))