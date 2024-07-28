import React from 'react';
import { connect } from "react-redux";
import Outer from './Boxes';

class Body extends React.Component {
  render() {
    return (
      <div className="containerCustom">
        <Outer />
      </div>
    );
  }
}

const mapStateToProps = (reducerData) => {
  return {
    ReducerData1: reducerData,
  };
};

const mapDispatchToProps = {
  // Success,
  // shiftBox,
  // cancelShift,
};
export default connect(mapStateToProps, mapDispatchToProps)(Body);