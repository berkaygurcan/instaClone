import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text>Senin İçin </Text>
      <View style={styles.iconsContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../../common/assets/icons/hearth.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../../common/assets/icons/messenger.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 114,
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
});
export default Header;
