import React from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 5 },
        { id: 2, value: 2 },
        { id: 3, value: 0 },
        { id: 4, value: 1 }
      ]
    };
    console.log("App - Constructor");
  }

  // Lifecycle Hooks
  // Only works with class components
  componentDidMount() {
    // Ajax call
    // this.setState({});
    console.log("App - Mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
