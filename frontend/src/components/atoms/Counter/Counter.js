import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
//import { increment, decrement, setDiff } from 'modules/counters';
import * as CounterActions from 'modules/counters';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      diff: 1
    }

    this.onChangeDiff = this.onChangeDiff.bind(this);
  }

  onChangeDiff(e) {
    const {counterActions} = this.props;
    let value = e.target.value === '' ? 0 : e.target.value;

    if(isNaN(value)) {
      return;
    }

    this.setState({
      diff: value
    });

    counterActions.setDiff(parseInt(value));
  }

  render() {
    //const {counters ,onIncrement, onDecrement} = this.props;
    const {counters, counterActions} = this.props;
    return (
      <div>
        <input type="text" value={this.state.diff} onChange={this.onChangeDiff}></input>
        <h1>VALUE: { counters.toJS().value }</h1>
        <button onClick={counterActions.increment}>+</button>
        <button onClick={counterActions.decrement}>-</button>
      </div>
    );
  }
}

console.log(this);

/*let mapStateToProps = (state) => {
  return {
    counters: state.counters.get('counter')
  };
}*/

/*let mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onUpdateDiff: (value) => dispatch(setDiff(value))
  }
}*/

export default connect(
  (state) => ({
    counters: state.counters.get('counter')
  }),
  (dispatch) => ({
    counterActions: bindActionCreators(CounterActions, dispatch)
  })
)(Counter);