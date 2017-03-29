/**
 * Created by Yatindra on 3/28/2017.
 */

import React from 'react';
import './CustomButton';

export default class CustomButton extends React.Component{

    render(){
        return(
            <div id="customButtonDiv">
                <input type={this.props.type} onClick={this.props.onClick.bind(this)} value={this.props.value} className= "customButton" />
            </div>
        )
    }
}