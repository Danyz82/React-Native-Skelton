import React from 'react';
import {View, Text, Button} from 'react-native';
import {withNavigation} from 'react-navigation';
import PropTypes from 'prop-types';

import styles from './DashBoardScreen.styles';

const DashBoardScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text>Dashboard screen</Text>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to Home"
        />
      </View>
    </View>
  );
};

DashBoardScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(DashBoardScreen);
