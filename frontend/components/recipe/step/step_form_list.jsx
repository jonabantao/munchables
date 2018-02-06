import React from 'react';
import { Link } from 'react-router-dom';

const StepFormList = (props) => {
  const step = props.step;
  console.log(props);
  return (
    <section key={step.id} className="step__form-list">
      <h4>
        <Link to={`/recipe/${props.recipeId}/steps/${step.id}`}
          className="step__form-step-title"
        >
          Step #{step.order}: {step.title ? step.title : "(Click to Edit)"}
        </Link>
      </h4>
      <div className="step__form-actions">
        <button className="step__form-action-button">Edit</button>
        <button className="step__form-action-button">Delete</button>
      </div>
    </section>
  );
};

export default StepFormList;