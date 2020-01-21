import {put, takeLatest, call, delay, all} from 'redux-saga/effects';
import axios from '../../services/fetchingService';
import * as TYPES from '../../store/actions/types';
import {API} from '../../constants';

function* postsSagaFetchData(action) {
  try {
    yield put({type: TYPES.SET_POST_LOADING, payload: true});
    yield delay(1000);
    const result = yield call(axios.get, API.GET.POST.LIST);
    yield put({type: TYPES.API_GET_POSTS_LIST, payload: result.data});
    yield put({type: TYPES.SET_POST_LOADING, payload: false});
  } catch (error) {
    yield put({type: TYPES.FETCH_POSTS_FAIL});
    yield put({type: TYPES.SET_POST_LOADING, payload: false});
    console.log(error);
  }
}

function* postsSaga() {
  yield takeLatest(TYPES.GET_POSTS_LIST, postsSagaFetchData);
}

export default function* yeldAll() {
  yield all([postsSaga()]);
}
