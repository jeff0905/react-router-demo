import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function getGoods(){
    fetch('/api/goods')
        .then(res => {
            return res;
        })
}
function *fetchGoods(action) {
    try {
        const goods = yield call(getGoods);
        if(goods) {
            yield put({type: 'fetchGoodsOk', goods: goods});
        }
    } catch(e) {
        yield put({type: 'fetchGoodsFail', message: e.message});
    }
}

function* mySaga() {
    console.log('mySaga begin.....................');
    yield takeEvery("fetchGoods", fetchGoods);
}

export default mySaga;
