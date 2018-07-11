import { all, call } from 'redux-saga/effects';
import { analysisRootSaga } from './analysis/sagas';
import { webSocketSaga } from './channel/sagas';
import { clusterConnectionSaga } from './cluster/sagas';
import { getConfigOnReconnect, getConfigSaga } from './config/sagas';
import { datasetRootSaga } from './dataset/sagas';

export function* rootSaga() {
    yield call(getConfigSaga);
    yield all([
        getConfigOnReconnect(),
        webSocketSaga(),
        analysisRootSaga(),
        datasetRootSaga(),
        clusterConnectionSaga(),
    ]);
}