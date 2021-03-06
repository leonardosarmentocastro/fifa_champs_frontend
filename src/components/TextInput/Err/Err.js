import React from 'react';
import PropTypes from 'prop-types';

import './Err.styles.scss';

const Err = ({ error }) =>
  <p className='Err'>{error}</p>

Err.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Err;
