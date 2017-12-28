import { combineReducers } from 'redux';

import counters from './counters';
import bcd from './abc';

export default combineReducers({
  counters,
  bcd
});