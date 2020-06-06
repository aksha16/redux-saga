import  test from 'tape';

import {incrementAsync, delay} from './sagas';

import {put , call} from 'redux-saga/effects';

test('incrementAsync Saga Test', (assert) => {
    const gen = incrementAsync();
    assert.deepEqual(
        gen.next().value,
        call(delay, 1000),
        'incrementAsync Saga must call delay(1000)'
      )
    
      assert.deepEqual(
        gen.next().value,
        put({type: 'INCREMENT'}),
        'incrementAsync Saga must dispatch an INCREMENT action'
      )
    
      assert.deepEqual(
        gen.next(),
        { done: true, value: undefined },
        'incrementAsync Saga must be done'
      )
    
      assert.end()
})