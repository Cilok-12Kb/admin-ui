import React from 'react'

function CheckBox(props) {
  const { label, id, ...rest} = props; 

  return (
    <>
        <input
            className="text-sm accent-primary"
            id={id}
            {...rest}
        />
        <label htmlFor={id} className="text-sm text-gray-01 ml-6 dark:text-gray-200">
            {label}
        </label>
    </>
  );
}

export default CheckBox;