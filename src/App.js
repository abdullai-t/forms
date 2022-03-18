import React from 'react';
import './style.css';

export default function App() {
  return (
    <FormGenerator
      fields={[
        {
          type: 'TEXT',
        },
        {
          type: 'DROPDOWN',
          data: ['boys', 'GIRS'],
          value: 'xn xzjbcjh',
        },
        {
          type: 'TEXT',
        },
        {
          type: 'DROPDOWN',
          data: ['boys', 'GIRS'],
          value: 'xn xzjbcjh',
        },
        {
          type: 'TEXT',
        },
        {
          type: 'DROPDOWN',
          data: ['boys', 'GIRS'],
          value: 'xn xzjbcjh',
        },
      ]}
    />
  );
}

export function FormGenerator({ fields, onSubmit, ...props }) {
  if (fields?.length) {
    return fields?.map((field) => {
      if (field?.type === 'TEXT') return <TextInput {...props} />;
      else if (field?.type === 'DROPDOWN') return <Dropdown {...props} />;
    });
  }

  return <></>;
}

export const TextInput = (props) => {
  const {
    placeholder,
    style,
    className,
    __HTML_DEFAULTS,
    onChange,
    containerClassName,
    containerStyle,
    value,
    title,
    required,
  } = props;
  return (
    <div style={containerStyle} className={containerClassName}>
      <small className="input-title">{title || 'No title added'} </small>
      {required && <small style={{ color: 'red' }}>*</small>}

      <input
        onChange={onChange}
        style={style}
        className={`textbox input ${className}`}
        placeholder={placeholder}
        value={value || ''}
        {...__HTML_DEFAULTS}
      />
    </div>
  );
};

export const Dropdown = (props) => {
  const { containerClassName, containerStyle, value, title, required, data } =
    props;
  return (
    <div style={containerStyle} className={containerClassName}>
      <small className="input-title">{title || 'No title added'} </small>
      {required && <small style={{ color: 'red' }}>*</small>}
      <select value={value}>
        {data?.map((datum, index) => {
          return (
            <option value={datum} key={index?.toString()}>
              {datum}{' '}
            </option>
          );
        })}
      </select>
    </div>
  );
};
