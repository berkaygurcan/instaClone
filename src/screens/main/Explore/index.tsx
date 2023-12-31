import React from 'react';
import {StyleSheet, View} from 'react-native';
import ExploreGrid from '../../../components/ExploreGrid';

const Explore = () => {
  return (
    <View style={styles.container}>
      {/* instagram explore grid */}
      <ExploreGrid />
      <ExploreGrid rowReverse />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Explore;
