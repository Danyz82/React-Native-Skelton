import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

const AppContainer = () => {
  const SwitchNavigator = createSwitchNavigator(
    {
      Auth: AuthNavigation,
      App: AppNavigation,
    },
    {
      initialRouteName: 'Auth',
    },
  );

  const AppContainerContent = createAppContainer(SwitchNavigator);

  return <AppContainerContent />;
};

export default AppContainer;
