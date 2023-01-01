import {StyleSheet} from 'react-native';
import {Colors} from '../../../global/colors';

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 24,
    paddingHorizontal: 12,
    alignItems: 'center',
    alignSelf: 'center',
  },
  footerText: {
    fontWeight: '400',
    fontSize: 14,
    color: Colors.colorGreyText,
    marginHorizontal: 8,
  },
});

export default styles;
