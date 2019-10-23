import { put, takeLatest, all } from 'redux-saga/effects';
import { LAOD_QUESTION } from '../types/actions';
let environment = {
    url: 'https://jsonblob.com/api/jsonblob/'
}
function* loadQuestions() {
    const json = yield fetch(environment.url + '363a8cb3-f57b-11e9-8b32-f9fcfc4a06f0')
        .then(response => response.json());
    yield put({ type: LAOD_QUESTION + "_RECEIVED", payload: json, });
}
function* actionWatcher() {
    yield takeLatest(LAOD_QUESTION, loadQuestions)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}