/**
 * Created by Yatindra on 3/27/2017.
 */

import React from 'react';
import SignUp from './SignUp';
import { Redirect } from 'react-router-dom';

export default class Home extends React.Component{


    render(){
        return(
                <div>
                    {
                        this.props.authentic?
                            <Redirect to="/todo"/>
                            :
                            <SignUp addNewUser={this.props.addNewUser} />
                    }
            </div>
        )
    }
}