/**
 * Created by Yatindra on 3/28/2017.
 */

import React from 'react';
import '../content/CustomInput.css';

export default class CustomInput extends React.Component{

    render(){
        return(
            <div className="CustomInput">
                <input type={this.props.type}
                       placeholder={this.props.placeholder}
                       name={this.props.name}
                       onChange={(e) => this.props.inputHandler(e)}
                />
            </div>
        );
    }
}