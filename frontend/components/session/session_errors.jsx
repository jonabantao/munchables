import React from 'react';

const sessionErrors = (props) => {
  const errorList = props.errors.map((err, i) => (
    <li className="session__error-list" key={i}>{err}</li>
  ));

  return (
    <ul className="session__error-container">
      {errorList}
    </ul>
  );
};

export default sessionErrors;
