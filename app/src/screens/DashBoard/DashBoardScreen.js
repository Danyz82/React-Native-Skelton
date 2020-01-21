import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {
  getPostsSelector,
  getPostIsLoadingSelector,
} from '../../sagas/posts/selectors';
import {getPostsList, clearPostsList} from '../../store/actions/creators';

import styles from './DashBoardScreen.styles';

const DashBoardScreen = props => {
  const [listType, setListType] = useState('flat');
  const {
    navigation,
    getPosts,
    onLoadPostsList,
    onClearPostsList,
    getIsLoading,
  } = props;

  useEffect(() => {
    onLoadPostsList();
    return () => {
      onClearPostsList();
    };
  }, [onClearPostsList, onLoadPostsList]);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text>Dashboard screen</Text>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to Home"
        />
        <Button
          onPress={() => {
            setListType(listType === 'flat' ? 'scroll' : 'flat');
          }}
          title={`Switch to ${
            listType === 'flat' ? 'Scroll list' : 'Flat list'
          }`}
        />
      </View>
      <View style={styles.container}>
        <Text>{listType === 'flat' ? 'Flat list' : 'Scroll list'}</Text>
        {getIsLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {listType !== 'flat' ? (
          <ScrollView height={'60%'}>
            {getPosts.map(item => (
              <Text key={item.id}>{item.title}</Text>
            ))}
          </ScrollView>
        ) : (
          <FlatList
            height={400}
            data={getPosts}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.itemList}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    </View>
  );
};

DashBoardScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  getPosts: PropTypes.arrayOf(Object),
  onLoadPostsList: PropTypes.func.isRequired,
  onClearPostsList: PropTypes.func.isRequired,
  getIsLoading: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    getPosts: getPostsSelector(state),
    getIsLoading: getPostIsLoadingSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadPostsList: () => dispatch(getPostsList()),
    onClearPostsList: () => dispatch(clearPostsList()),
  };
};

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DashBoardScreen),
);
