import React from 'react';
import AppBar from './../components/AppBar/AppBar';

export default class Home extends React.Component {

    goDetail() {
        console.log('goDetail');
    }
    render() {
        return (
            <div> 
                <AppBar /> 
                <button onClick={() => this.goDetail()} >进入详情</button>
            </div>
        )
    }
}