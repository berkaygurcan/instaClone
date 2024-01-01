import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ExploreGrid from '../../../components/ExploreGrid';
import {mockExploreData} from '../../../config/mockData';
import CustomImage from '../../../components/CustomImage';
import CustomTextInput from '../../../components/CustomTextInput';

const Explore = () => {
  return (
    <View style={styles.container}>
      {/* explore header */}
      <View style={styles.headerContainer}>
        <CustomTextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="search"
          value={''}
          onChangeText={function (text: string): void {}}
        />
        <CustomImage
          style={styles.tinyLogo}
          source={require('../../../common/assets/icons/ellipsis.png')}
        />
      </View>
      {/* instagram explore grid */}
      <ScrollView>
        {mockExploreData.map(item => (
          <ExploreGrid contents={item.items} rowReverse={item.id % 2 === 0} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },

  input: {
    width: '90%',
    height: 42,
    borderRadius: 6,
    borderWidth: 2,
    paddingHorizontal: 16,
    borderColor: '#E0DDDD',
    marginVertical: 8,
  },
});

export default Explore;
