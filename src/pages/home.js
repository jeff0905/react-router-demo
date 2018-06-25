import React from 'react';
import AppBar from './../components/AppBar/AntBar';
import AntCarousel from './../components/Carousel/AntCarousel';
import GoodList from './../components/GoodList/AntList';

export default class Home extends React.Component {

    goDetail() {
        console.log('goDetail');
    }
    render() {
        return (
            <div> 
                <AppBar /> 
                <AntCarousel />

                <GoodList />
                <button onClick={() => this.goDetail()} >进入详情</button>
            </div>
        )
    }
}