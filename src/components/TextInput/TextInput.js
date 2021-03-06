import React from 'react';
import PropTypes from 'prop-types';

import Err from './Err';
import FieldIsRequiredHint from './FieldIsRequiredHint';
import Note from './Note';
import StatusIcon from './StatusIcon';
import './TextInput.styles.scss';

const TextInput = ({
  error,
  id,
  isDisabled,
  isPristine,
  isRequired,
  label,
  note,
  onChange,
  onBlur,
  placeholder,
  type,
  value,
}) =>
  <div id={id} className='TextInput'>
    <div className='field-details'>
      <span className='label'>{label}</span>
      {isRequired ? <FieldIsRequiredHint /> : <span/>}

      <StatusIcon
        hasErrors={Boolean(error)}
        isPristine={isPristine}
      />
    </div>

    <div className='field-container'>
      <input
        className='input-field'
        disabled={isDisabled}
        onChange={(event) => onChange(event)}
        onBlur={(event) => onBlur(event)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>

    {error ? <Err error={error} /> : <Note note={note} />}
  </div>

TextInput.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string,
  isPristine: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  note: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any.isRequired,
};

TextInput.defaultProps = {
  isDisabled: false,
  isPristine: true,
  isRequired: false,
  note: '',
  placeholder: '',
  type: 'text',
};

export default TextInput;