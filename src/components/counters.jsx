import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement, onReset } = this.props;
    console.log("Counters - Rendered");
    return (
      <div>
        <button className="btn btn-primary m-2 btn-sm" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
          >
            <h4>Counter {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
