import React from 'react';

export const ListErrors = ({
  errors
}: {
  errors: {
    [key: string]: string;
  };
}) => {
  if (errors) {
    return (
      <ul className="error-messages">
        {Object.keys(errors).map(key => {
          return (
            <li key={key}>
              {key} {errors[key]}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
};
