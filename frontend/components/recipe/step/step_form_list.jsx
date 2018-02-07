import React from 'react';
import { Link } from 'react-router-dom';

const StepFormList = (props) => {
  const step = props.step;
  return (
    <li className="step__list">
      <div key={step.id} className="step__form-list">
        <h4>
          <Link to={`/recipes/${props.recipeId}/steps/${step.id}/edit`}
            className="step__form-step-title"
          >
            Step #{props.stepNum}: {step.title ? step.title : "(Click to Edit)"}
          </Link>
        </h4>
        <div className="step__form-actions">
          <Link to={`/recipes/${props.recipeId}/steps/${step.id}/edit`}
            className="step__form-edit-button"
          >
            <p>Edit</p>
          </Link>
          <button className="step__form-delete-button"
            onClick={() => props.removeStep(step.id)}
          >
            Delete
        </button>
        </div>
      </div>
    </li>
  );
};

export default StepFormList;