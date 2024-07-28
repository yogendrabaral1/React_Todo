import React from 'react';
import '../common.css';
import { connect } from "react-redux";
import { addToDo } from "../actions/action";

class InputElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", duplicateMsg: "" };
  }

  updateInput = input => {
    this.props.ReducerData1.map((item) => {
      if (item === input) {
        this.setState({ duplicateMsg: "Item already in ToDo List" });
      }
      else {
        this.setState({ duplicateMsg: "" });
      }
    });
    this.props.ReducerData2.map((item) => {
      if (item === input) {
        this.setState({ duplicateMsg: "Item already in Completed List" });
      }
      else {
        this.setState({ duplicateMsg: "" });
      }
    });
    this.setState({ input: input })
  };

  handleAddTodo = () => {
    this.props.ReducerData1.map((item) => {
      if (item === this.state.input) {
        this.setState({ duplicateMsg: "Item already in ToDo List" });
      }
      else {
        this.setState({ duplicateMsg: "" });
      }
    });
    this.props.ReducerData2.map((item) => {
      if (item === this.state.input) {
        this.setState({ duplicateMsg: "Item already in Completed List" });
      }
      else {
        this.setState({ duplicateMsg: "" });
      }
    });
    if (this.state.duplicateMsg == "" && this.state.input !== "") {
      this.props.addToDo(this.state.input);
    } else {
      this.setState({ duplicateMsg: "Please enter task" })
    }
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <div className="heading1">My To Do List!</div>
        <label htmlFor="fname" className="inputLabel">Add ToDo: </label>
        <div style={{ display: "flex", marginLeft: "30%" }}>
          <input className="form-control" type="text" style={{ width: "50%" }} onChange={e => this.updateInput(e.target.value)} value={this.state.input}></input>
          <button className="btn btn-primary addButton" onClick={this.handleAddTodo}>ADD</button>
        </div>
        <span className="text-danger">{this.state.duplicateMsg}</span>
      </div>
    );
  }
}

const mapStateToProps = (reducerData) => {
  return {
    ReducerData1: reducerData.dataFromInput,
    ReducerData2: reducerData.completedList,
  };
};

const mapDispatchToProps = {
  addToDo,
};
export default connect(mapStateToProps, mapDispatchToProps)(InputElement);