import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

const initState = {
    goods: [], // 商品列表.
    loading: false, // 默认不加载.
    selectId: null, // 选择的商品id.
    status: 'init', // 状态, init, start, finished, loading, 
}

const effects = {
    getGoods(){
         return fetch('/api/goods')
        .then(res => res.json())
        .then(data => {
            console.log('ajax fetch, data:', data);
            return data;
        });
    },
    addGoods(name, desp) {
        let formData = new FormData();
        formData.append('name', name);
        formData.append('desp', desp);
        return fetch('/api/good/add', {
            method: 'POST',
            body: JSON.stringify({name, desp}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('ajax fetch, add ,', data);
                return data;
            })
    }
}
function *fetchGoods(action) {
    try {
        console.log(' generator *fetchGoods');
        yield put({type: 'SHOW_LOADING'});
        const goods = yield call(effects.getGoods);
        console.log('goods', goods );
        if (!goods) {
            yield put({type: 'HIDE_LOADING'});
            return;
        }
        yield put({type: 'HIDE_LOADING'});
        yield put({type: 'FETCH_GOODS_OK', goods });
    } catch (e) {
        yield put({type: 'HIDE_LOADING'});
        yield put({type: 'FETCH_GOODS_FAIL', message: e.message});
    }
}

function *addGoods(action) {
    try {
        const { payload: { name, desp } } = action;
        console.log(' add goods ',name, desp, action);
        const goods = yield call(effects.addGoods, name, desp)
        console.log('添加万之后的goods', goods);
        if (!goods) {
            return;
        }
        yield put({type: 'ADD_GOODS_OK', goods});
    } catch (e) {
        yield put({type: 'ADD_GOODS_FAIL', message: e.message});
    }
}

function *goods() {
    console.log('saga *goods');
    yield takeEvery('FETCH_GOODS', fetchGoods);
    yield takeEvery('ADD_GOODS', addGoods);
}

const goodReducer = function (state = initState, action) {
    switch (action.type) {
        case 'SHOW_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'HIDE_LOADING':
            return {
                ...state,
                loading: false,
            }
        case 'FETCH_GOODS':
            console.log('我开始获取商品了..........');
            return {
                ...state,
                loading: true,
            };
        case 'FETCH_GOODS_OK':
            console.log('获取了数据.....', action);
            const { goods } = action;
            return {
                ...state,
                goods,
                loading: false,
            }
        case 'FETCH_GOODS_FAIL':
            return {
                ...state,
                status: 'fail'
            }
        
        // add..
        case 'ADD_GOODS':
            console.log('开始添加商品了......', action);
            return {
                ...state,
                loading: true,
            }
        case 'ADD_GOODS_OK':
            console.log('添加商品success.....');
            const { goods: list } = action;
            return {
                ...state,
                goods: list,
                loading: false,
            }
        default:
            return state;
    }
}
export default {
    goods,
    goodReducer,
};
