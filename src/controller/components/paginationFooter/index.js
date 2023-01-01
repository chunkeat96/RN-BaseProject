import React, {memo} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import styles from './style';

const PaginationFooter = props => {
  const {loading, text} = props;

  return (
    <View style={styles.footer}>
      {loading && <ActivityIndicator />}
      <Text style={styles.footerText}>{text}</Text>
    </View>
  );
};

export default memo(PaginationFooter);
