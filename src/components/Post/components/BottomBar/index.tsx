import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomImage from '../../../CustomImage';

const BottomBar = () => {
  return (
    <View style={styles.bottomIcons}>
      <View style={styles.leftIcons}>
        <CustomImage
          style={styles.icon}
          source={require('../../../../common/assets/icons/hearth.png')}
        />
        <CustomImage
          style={styles.icon}
          source={require('../../../../common/assets/icons/comment.png')}
        />
        <CustomImage
          style={styles.icon}
          source={require('../../../../common/assets/icons/send.png')}
        />
      </View>
      <CustomImage
        style={styles.icon}
        source={require('../../../../common/assets/icons/bookmark.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  leftIcons: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  bottomIcons: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
  },
});
export default BottomBar;
