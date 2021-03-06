import React from 'react';
import PropTypes from 'prop-types';

import './LinkToPage.styles.scss';

const LinkToPage = (props) => (
  <li className={`LinkToPage item
    ${props.isLinkHighlighted() ? '--is-highlited' : ''}
    `.trim()}
    onClick={() => props.redirectToPage()}
  >
    <p className='title'>{props.title}</p>

    {props.subtitle &&
      <p className='subtitle'>{props.subtitle}</p>
    }
  </li>
);

LinkToPage.propTypes = {
  isLinkHighlighted: PropTypes.func.isRequired,
  redirectToPage: PropTypes.func.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default LinkToPage;
