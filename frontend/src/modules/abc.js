import {createAction, handleActions} from 'redux-actions';
import {Map, List}from 'immutable';

// 액션 타입
const INCREMENT = 'abc/INCREMENT';
const DECREMENT = 'abc/DECREMENT';
const SET_DIFF = 'abc/SET_DIFF';

// 액션 생성자
export const increment = createAction(INCREMENT); //no payload
export const decrement = createAction(DECREMENT); //no payload
export const setDiff = createAction(SET_DIFF); //payload(diff)

// 초기 상태를 정의합니다
const initialState = List([
  Map({
    abc: 0,
  })
]);

//Reducers
export default handleActions({
  [INCREMENT]: (state, action) => state,
  [DECREMENT]: (state, action) => state,
  [SET_DIFF]: (state, action) => state,
}, initialState);