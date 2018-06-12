import React from 'react';

export default class Home extends React.Component {

    goDetail() {
        console.log('goDetail');
    }
    render() {
        return (
            <div> 
                home 
                <button onClick={() => this.goDetail()} >进入详情</button>
            </div>
        )
    }
}