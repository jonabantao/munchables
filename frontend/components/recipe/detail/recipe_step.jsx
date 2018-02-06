import React from 'react';

const RecipeStep = (props) => {
  const step = props.step;
  const title = step.title ? `: ${step.title}` : null;
  return (
    <section className="detail__step-container">
      <h3 className="detail__step-title">Step #{step.order}{title}</h3>
      <div className="detail__step-body">
        <p>
          {step.body}
        </p>
      </div>
    </section>
  );
};

export default RecipeStep;