import {createAction, handleActions} from 'redux-actions';
import {Map, List}from 'immutable';

// 액션 타입
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_DIFF = 'counter/SET_DIFF';

// 액션 생성자
export const increment = createAction(INCREMENT); //no payload
export const decrement = createAction(DECREMENT); //no payload
export const setDiff = createAction(SET_DIFF); //payload(diff)

// 초기 상태를 정의합니다
const initialState = Map({
  counter: Map({
      value: 0,
      diff: 1
    }),
});

//Reducers
export default handleActions({
  [INCREMENT]: (state, action) => {
    const counter = state.get('counter');

    return state.setIn(['counter', 'value'], counter.get('value') + counter.get('diff'));
  },
  [DECREMENT]: (state, action) => {
    const counter = state.get('counter');

    return state.setIn(['counter', 'value'], counter.get('value') - counter.get('diff'));
  },
  [SET_DIFF]: (state, action) => {

    return state.setIn(['counter', 'diff'], action.payload);
  },
}, initialState);