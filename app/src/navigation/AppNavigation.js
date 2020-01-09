import {createStackNavigator} from 'react-navigation-stack';

// screens
import DashBoard from '../screens/DashBoard';

const AppNavigation = createStackNavigator(
  {
    Dashboard: {
      screen: DashBoard,
      path: 'dashboard',
      navigationOptions: {headerShown: false},
    },
  },
  {
    initialRouteName: 'Dashboard',
  },
);

export default AppNavigation;
