import React, { Component } from 'react';

import CheeseDetail from './cheese_detail'
import CheeseList from '../containers/cheese_list'
import FacebookComments from '../containers/facebook_comments'

class Cheeses extends Component {
    
    render(){
        return(
            <div className="flex-container">
                <CheeseList />
                    <div className="detail">
                        <CheeseDetail />
                        <FacebookComments />
                    </div>
            </div>
        );
    }
}

export default Cheeses

