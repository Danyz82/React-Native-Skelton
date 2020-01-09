import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/Home';

const AuthNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: 'home',
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default AuthNavigation;
