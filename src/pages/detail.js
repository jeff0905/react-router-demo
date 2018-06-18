import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import { add, del } from './../action'

const mapStateToProps = state => ({
    count: state.good.count,
    goods: state.good.goods,
    loading: state.good.loading,
})
const mapDispatchToProps = dispatch => ({
    add: () => dispatch(add()),
    del: () => dispatch(del()),
    getGoods: () => {
        console.log('点击了按钮', dispatch);
       return dispatch({type: 'FETCH_GOODS'})
    },
    addGoods: (name, desp) => {
        return dispatch({type: 'ADD_GOODS', payload: {name, desp}})
    }
})
const AddFormDom = (props) => {
    const { handleSubmit } = props
     
     return(<form onSubmit={handleSubmit}>
            <div>
                <label>名称</label>
                <Field name="name" component="input" type="text" />
                <Field name="desp" component="input" type="text" />
                <button type="submit">提交</button>
            </div>
        </form>
        )
}
const AddForm = reduxForm({
    // a unique name for the form
    form: 'add'
})(AddFormDom);

const Detail = (props) => {
    console.log('Detail', props);
    const submit = (values) =>{
        console.log('values',values);
        const { name, desp } = values;
        props.addGoods(name, desp);
    }
    return (
        <div> detail: 值：{props.count} 
            <button onClick={props.add}>加一</button>
            <button onClick={props.del}>减一</button>
            <button onClick={props.getGoods}>获取商品</button>

            
            
            <button onClick={props.addGoods}>
                添加商品
            </button>
            <button onClick={props.getGoodById}>
                <input type="text"/>
                查询商品.
            </button>
            <AddForm onSubmit={submit}/>
            {
                props.loading && <div>loading....</div>
            }
            {
                props.goods.length === 0 && <div> 暂无数据.</div>
            }
            {
                props.goods.map(item => {
                    return (
                        <div key={item.id}>
                            {item.id},
                            {item.name}
                        </div>
                    )
                })
            }

        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Detail);
