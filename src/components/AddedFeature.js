import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/index";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeature: state.additionalFeature,
    car: state.car,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
