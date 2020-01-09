import React from 'react';
import {View, Text, Button} from 'react-native';
import {withNavigation} from 'react-navigation';
import PropTypes from 'prop-types';

import styles from './HomeScreen.styles';

const HomeScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text>Home screen</Text>
        <Button
          onPress={() => navigation.navigate('Dashboard')}
          title="Go to Dashboard"
        />
      </View>
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(HomeScreen);
