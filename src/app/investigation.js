import PropTypes from 'prop-types';
import React from 'react';

import Link from '@jetbrains/ring-ui/components/link/link';

import styles from './investigation.css';

function renderInvestigationDetails(title, details) {
  if (details.length) {
    return (
      <ul className={styles.details}>
        <span className={styles.detailsTitle}>{title}</span>
        {details.map(detail => (
          <li key={detail.id} className={styles.detail}>
            <Link
              target="_top"
              className={styles.hiddenOverflow}
              href={detail.url}
              title={detail.text}
            >{detail.text}</Link>
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}

const Investigation = ({name, url, tests, problems}) => (
  <li className={styles.item}>
    <Link target="_top" href={url}>{name}</Link>

    {renderInvestigationDetails('Tests failed:', tests)}
    {renderInvestigationDetails('Build problems:', problems)}
  </li>
);

Investigation.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tests: PropTypes.array.isRequired,
  problems: PropTypes.array.isRequired
};

export default Investigation;
