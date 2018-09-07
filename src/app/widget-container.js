import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {i18n} from 'hub-dashboard-addons/dist/localization';

import Widget from './widget';
import {reloadInvestigations} from './redux/actions';

const WidgetContainer = connect(
  (state, {dashboardApi}) => ({
    dashboardApi,
    isConfiguring: state.configuration.isConfiguring,
    // eslint-disable-next-line no-magic-numbers
    refreshPeriod: state.refreshPeriod * 1000,
    title: state.configuration.isConfiguring
      ? {
        title: i18n('TeamCity Investigations'),
        counter: -1,
        href: null,
        dashboardApi
      }
      : {
        title: i18n('TeamCity Investigations'),
        counter: state.investigationsCount,
        href: state.teamcityService &&
          state.teamcityService.homeUrl &&
          `${state.teamcityService.homeUrl}/investigations.html`,
        dashboardApi
      }
  }),
  dispatch => ({
    onRefresh: () => dispatch(reloadInvestigations())
  })
)(Widget);

WidgetContainer.propTypes = {
  dashboardApi: PropTypes.object.isRequired
};

export default WidgetContainer;
