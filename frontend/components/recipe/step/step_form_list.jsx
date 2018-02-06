import React from 'react';
import { Link } from 'react-router-dom';

const StepFormList = (props) => {
  const step = props.step;
  return (
    <section key={step.id} className="step__form-list">
      <h4>
        <Link to={`/recipes/${props.recipeId}/steps/${step.id}/edit`}
          className="step__form-step-title"
          step={step}
        >
          Step #{step.order}: {step.title ? step.title : "(Click to Edit)"}
        </Link>
      </h4>
      <div className="step__form-actions">
        <Link to={`/recipes/${props.recipeId}/steps/${step.id}/edit`}
          className="step__form-edit-button"
          step={step}
        >
          <p>Edit</p>
        </Link>
        <button className="step__form-delete-button"
          onClick={() => props.removeStep(step.id)}
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default StepFormList;