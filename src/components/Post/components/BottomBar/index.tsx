import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const BottomBar = () => {
  return (
    <View style={styles.bottomIcons}>
      <View style={styles.leftIcons}>
        <Image
          style={styles.icon}
          source={require('../../../../common/assets/icons/hearth.png')}
        />
        <Image
          style={styles.icon}
          source={require('../../../../common/assets/icons/comment.png')}
        />
        <Image
          style={styles.icon}
          source={require('../../../../common/assets/icons/send.png')}
        />
      </View>
      <Image
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
