import React from "react";
import Q1_1 from "./components/q1_1";
import Q1_2 from "./components/Q1_2";
import Q3 from "./components/Q3";
import Q4 from "./components/Q4";
import FruitList from "./components/Q2";

class UserGreeting extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello, {this.props.firstName} {this.props.lastName}!</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <UserGreeting firstName="Srijan" lastName="Pandit" /> 
      <Q1_1/>
      <Q1_2/>
      <FruitList/>
      <Q3/>
      <Q4/>
    </div>
  );
}

export default App;