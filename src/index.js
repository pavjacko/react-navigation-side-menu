/* @flow */
/* eslint-disable import/no-commonjs */

module.exports = {
  /**
   * Navigators
   */
  get createSideMenuNavigator() {
    return require('./navigators/createSideMenuNavigator').default;
  },

  /**
   * Views
   */
  get SideMenu() {
    return require('./views/SideMenu').default;
  },
  /**
   * Utils
   */
  get createTabNavigator() {
    return require('./utils/createTabNavigator').default;
  },
};
