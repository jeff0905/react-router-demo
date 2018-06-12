import React from 'react';
import { connect } from 'react-redux'
import { add, del } from './../action'

const mapStateToProps = state => ({
    count: state.count,
})
const mapDispatchToProps = dispatch => ({
    add: () => dispatch(add()),
    del: () => dispatch(del()),
})

const Detail = (props) => {
    console.log('Detail', props);
    return (
        <div> detail: 值：{props.count} 
            <button onClick={props.add}>加一</button>
            <button onClick={props.del}>减一</button>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Detail);
