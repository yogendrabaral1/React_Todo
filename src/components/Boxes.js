import React from 'react';
import { connect } from "react-redux";
import { updateToDo, updateCompleted, deleteCompleted, deleteToDo } from "../actions/action";

class Outer extends React.Component {
  handleUpdateCheck = (i) => {
    this.props.updateToDo(i);
  };

  handleUpdateCompleted = (i) => {
    this.props.updateCompleted(i);
  }

  handleDelete = (i, status) => {
    if (status === "todo") {
      this.props.deleteToDo(i);
    } else {
      this.props.deleteCompleted(i);
    }
  }

  render() {
    return (
      <div className="Todolist">
        <div className="col-12 col-md-5 blockParent">
          <center>
            <div className="subHeading">ToDo List</div>
            <div className="block">
              {this.props.inputData.map((item, i) => (
                <div key={item} className="taskName">
                  {i + 1}. {item}
                  <span style={{ float: "right" }}>
                    <span>
                      <input type="checkbox"
                        style={{ height: 15, width: 15 }}
                        className="form-check-input"
                        onChange={() => this.handleUpdateCheck(i)}>
                      </input>
                    </span>
                    <span>
                      <p className="close"
                        style={{ fontSize: 14, marginLeft: 5, lineHeight: 1.5 }}
                        onClick={() => this.handleDelete(i, "todo")}>
                        x
                      </p>
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </center>
        </div>
        <div className="col-12 col-md-5 blockParent">
          <center>
            <div className="subHeading">Completed</div>
            <div className="block">
              {this.props.completedData.map((item, i) => (
                <div key={item} className="taskName">
                  {i + 1}. {item}
                  <span style={{ float: "right" }}>
                    <span>
                      <input type="checkbox"
                        style={{ height: 15, width: 15 }}
                        className="form-check-input"
                        checked
                        onChange={() => this.handleUpdateCompleted(i)}>
                      </input>
                    </span>
                    <span>
                      <p className="close"
                        style={{ fontSize: 14, marginLeft: 5, lineHeight: 1.5 }}
                        onClick={() => this.handleDelete(i, "completed")}>
                        x
                      </p>
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </center>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reducerData) => {
  return {
    inputData: reducerData.dataFromInput,
    completedData: reducerData.completedList
  };
}

const mapDispatchToProps = {
  updateToDo,
  updateCompleted,
  deleteCompleted,
  deleteToDo
};
export default connect(mapStateToProps, mapDispatchToProps)(Outer);
