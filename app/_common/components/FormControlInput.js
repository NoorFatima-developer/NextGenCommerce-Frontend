import React from "react";

const FormControlInput = ({
  type,
  name,
  placeholder,
  className,
  onChange,
  value,
  onBlur,
  touchedFieldName,
  errorFieldName,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {touchedFieldName && errorFieldName && (
        <div className="text-red-500 text-sm mt-1 mx-auto w-3/4 md:w-3/4 lg:w-2/3">
          {errorFieldName}
        </div>
      )}
    </div>
  );
};

export default FormControlInput;
