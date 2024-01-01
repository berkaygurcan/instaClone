import React from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '../Typography';
import CustomImage from '../CustomImage';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Typography text={'Senin İçin'} />
      <View style={styles.iconsContainer}>
        <CustomImage
          style={styles.tinyLogo}
          source={require('../../common/assets/icons/hearth.png')}
        />
        <CustomImage
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
