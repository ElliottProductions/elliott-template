/* eslint-disable react/prop-types */
export { default as Form } from './Form.jsx';
import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './FormControls.css';

function FormControl({
  label,
  children,
  className: customClassName,
}) {

  const className = classNames(
    styles.FormControl,
    customClassName
  );

  return (
    <label className={className}>
      <Label text={label} />
      {children}
    </label>
  );
}

function Label({ text }) {
  return <span className="label-text">{text}</span>;
}

export function CheckboxControl({ label, text, ...rest }) {
  return (
    <div className={styles.FormControl}>
      <Label text={label} />
      <label className={styles.CheckboxLabel}>
        <input type="checkbox" {...rest} />
        {text}
      </label>
    </div>
  );
}

const verifyValue = (props) => {
  if (Object.prototype.hasOwnProperty.call(props, 'value'))
    props.value = props.value ?? '';
};

// eslint-disable-next-line react/display-name
export const InputControl = forwardRef((props, ref) => {
  const { label, className, ...rest } = props;
  verifyValue(rest);

  return (
    <FormControl label={label} className={className}>
      <input ref={ref} {...rest} />
    </FormControl>
  );
});

export function SelectControl({
  label,
  children,
  ...rest
}) {
  return (
    <FormControl label={label}>
      <select {...rest}>{children}</select>
    </FormControl>
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <textarea {...rest}></textarea>
    </FormControl>
  );
}

export function FormButton({ children }) {
  return (
    <button className={styles.FormButton}>
      {children}
    </button>
  );
}

export function Fieldset({ legend, children }) {
  return (
    <fieldset className={styles.Fieldset}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
