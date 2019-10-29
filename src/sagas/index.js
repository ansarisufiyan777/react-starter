import { put, takeLatest, all } from 'redux-saga/effects';
import { LAOD_DATA } from '../types/actions';
let environment = {
    url: 'https://jsonblob.com/api/jsonblob/'
}
function* loadQuestions() {
    const json = yield fetch(environment.url + '07fb1e9c-fa31-11e9-a508-5bcb98352c99')
        .then(response => response.json());
    yield put({ type: LAOD_DATA + "_RECEIVED", payload: json, });
}
function* actionWatcher() {
    yield takeLatest(LAOD_DATA, loadQuestions)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}