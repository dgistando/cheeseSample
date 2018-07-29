import React, {Component} from 'react';
import {SplitButton, Button, MenuItem, Navbar, FormGroup, FormControl, Image} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {withRouter, Link} from 'react-router-dom'

import {searchCheese, getCart, selectCheese} from '../actions/index';

/**
 *  My plan for this class is to give the option to search 
 *  many different ways. I want the search bar to change depending on what 
 *  type of search is selected. Right noow its just text based.
 * 
 *  The functions for Type and alphabetical are in the files but not included
 *  in this sample
 */

class DynamicSearch extends Component{

    constructor(props){
        super(props);
        this.state = {term : '',
                      title : 'Name',
                      items : 0,
                      showCheese : false,
                      myId : window.navigator.userAgent.replace(/\D+/g,'')}
        this.handleSelect = this.handleSelect.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.props.getCart(window.navigator.userAgent.replace(/\D+/g,''));
        this.props.searchCheese('');
    }

    onInputChange(event){
        this.setState({term : event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault()
        this.props.selectCheese(null)

        this.props.searchCheese(this.state.term)
        this.props.history.push('/cheeseSample/Cheeses')
    }


    nonFormSubmit(Letter){
        //console.log(Letter.letter)
    }

    handleSelect(eventKey){
        this.setState({title:eventKey})
    }

    getNameSearch(){
        return (
            <FormControl type="text"
            placeholder="Search"
            value={this.state.term}
            onChange={this.onInputChange} />
        );
    }

    renderSearch(type){

        switch(type){
            case('Name') :
             return this.getNameSearch();
             default :
        }
    }

    render(){

        return (
            <Navbar style={{'color':'blue'}}>
            <Navbar.Header>
                <Navbar.Brand>
                    <div onClick={() => {this.props.searchCheese('')}}>
                        <Link to='/cheeseSample/'>CheeseShop</Link>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                <form onSubmit={this.onFormSubmit}>
                <FormGroup>
                    {this.renderSearch(this.state.title)}
                </FormGroup>{' '}
                    <SplitButton
                        bsStyle={'primary'}
                        title={this.state.title}
                        key={1}
                        id={`split-button-basic-${1}`}
                        onClick={this.onFormSubmit}
                        >
                            <MenuItem onSelect={this.handleSelect} eventKey="Name">Name</MenuItem> 
                    </SplitButton>
                    </form>
                </Navbar.Form>

                <div className="cartIcon">
                    {(this.props.cartCount) ? this.props.cartCount : 0}
                    <Button bsStyle="link" onClick={() =>{
                         this.props.getCart(this.state.myId) 
                         this.props.history.push('/cheeseSample/MyCart')
                         }}>
                        <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANTSURBVGhD7ZlLaBNBGMdHUYvg+wEWRPQgiie1Nila20u7G6rupmpKbVIRa5qm9dESlSq2UayZDW0aYrMbYnvxUITis3hQi6AnvUjBo6+7ePCmtijrzPazj7iENN2dJLA/+BPIfDP/77+PZDZBFhYWFgVM0/F1yO8eQAHvR4SvvEOyNKZJkUaQgpvRSHAZVOY5fs8wkaqp9aSKbveoJMRsvUVJaTVU5zEtnvfTQaj6ulODqOQMJaE6j/F7Lk6HaG8iTWOdIHgSDUbWwYw8prWxHF1t60PRG+e1+yIh+cjrj7mB8FPtzORSyb4N0PE8UPCDuUFyLfwKOpsn8dAJ/QVzpDgWobN5MhReSU7nT91FWUvGH1AwuBg6ywIFP9JdmLXikhc6ypJE2K27MEvJ+BuKRJZDR1kSC64iZ+WXrgE7BaGbBSLjJzqLMxL5CsjqI1cPJdyob8JC+A50YQB0n5Wby+sPuUe3QxcGIeMXOkZm6zG4G0iCbul1zcxTHFeAu4Ekwtd1zcySjN+As8EoUud/ZmYqIdWBs8GwDCJLn8l2ZAk4GwzTIPgcuJoAsyD4O4oHV4CrCbAL0gOOJsEkCB5H0egacDSJ1CAJiey/cIlhSt7aubDnjUxJDSLjYRgpMGTpckqQZzBSYKQ+v2uPwHgPjBYQA6H1pPG5O+Cp5/nnRHQfZpBwAziaiIIjxGwmiBmSMQY3E6E/ZtPflvQaMEpMglBisSISppdcVhO6jSxUzIL8Q7tnpPq11y7Ftvp8Y5vPto0ujd7sJ+9JmWpRHIeLAxfub2v2vtzYGRjW3o+HHODADhsvtNk44bedF1XQl5Kqw1tgOC0Oh6OI1L+eNVe1c8IQDLOjtKZmEzGeoA1U1Z9WD4r10JCQ0RelrVrooPX7Dx1TuYYzapmjVptvq3ZyUMKGUl7kqXHl0Qb1VFevWtfRNdUIJ3yCkrTYOPEerRe8Hdp83uODAyF2QQkb9vHCDmpMj6TQ3K6dlakg4hiUpMXOiSFaX1HrVp0tAfXAEZc2v4wT3FDCDmJ8l5rPSJi0O5zlMJwWemmSe+xryvzxXS5XDv6vJLtVO+f0k6P7kFxSg6XV4m4YyYi9fG0xCdBPAo2S+d2VlS4TH6gsLCwscg9CfwFct981vVVQDQAAAABJRU5ErkJggg==" responsive width="25" height="25"/>
                    </Button>
                </div>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapDispatchtoProps(dispatch){
    return bindActionCreators({
        selectCheese,
        searchCheese,
        getCart
    }, dispatch)
}

function mapStateToProps({inCart}){
    return {
        cartCount : inCart.length
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(DynamicSearch))
