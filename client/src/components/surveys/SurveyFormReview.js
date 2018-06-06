import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues }) => (
  <div>
    <h5>Confirm your entries!</h5>
    <button className="yellow darken-3 btn-flat" onClick={onCancel}>
      Back
    </button>
  </div>
);

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
