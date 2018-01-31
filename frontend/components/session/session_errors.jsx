import React from 'react';

const sessionErrors = (props) => {
  let errorList = props.errors.map((err, i) => 
    <li key={i}>{err}</li>
  );

  return (
    <ul className="session__error-container">
      {errorList}
    </ul>
  );
};

export default sessionErrors;