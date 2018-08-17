import React from 'react';
import PropTypes from 'prop-types';

import Link from '@jetbrains/ring-ui/components/link/link';

import styles from './app.css';
import EmptyWidget from './empty-widget';

const renderNotConfiguredService = onConfigure => (
  <span>
    {'TeamCity service to get investigations from, it not configuration yet. Please, '}
    <Link
      onClick={onConfigure}
    >{'select the service.'}</Link>
  </span>
);

const renderEmpty = () => (
  <EmptyWidget header={'(⌒‿⌒)'}>
    {'No investigations'}
    <br/>
    {'are assigned to you'}
  </EmptyWidget>
);

const Content = ({teamcityService, investigations, onConfigure}) => (
  <div className={styles.widget}>
    {!teamcityService
      ? renderNotConfiguredService(onConfigure)
      : investigations.length === 0
        ? renderEmpty()
        : teamcityService.name
    }
  </div>
);

Content.propTypes = {
  teamcityService: PropTypes.object,
  investigations: PropTypes.array.isRequired,
  onConfigure: PropTypes.func.isRequired
};

export default Content;
