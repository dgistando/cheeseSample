import React, {Component} from 'react'
import {connect} from 'react-redux'

/**
 * This component doesn't work unless the application is online. In thr
 * working version its useable. My inention is that peole can say things
 * about the cheese if they have had it or heard of it before.
 * 
 * Really just the voice of the internet in regards to this cheese.(I know, dangerous)
 */
class FacebookComments extends Component {

    constructor() {
        super();
    }

    render(){
        if(!this.props.ActiveCheese){
            return <div></div>
        }
        return(
            <div>
                {/*
                <h2>Comments</h2>
                <div class="fb-comments" data-href="https://developers.facebook.com/docs/" data-numposts="25"></div>
                */}
            </div>
        );
    }
}

function mapStatetoProps({ActiveCheese}){
    return {
        ActiveCheese
    };
}

export default connect(mapStatetoProps)(FacebookComments)
