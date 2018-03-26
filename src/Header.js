import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>Ramalan Cuaca</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#1565C0',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingTop: 10,
      position: 'relative',

    },
    textStyle: {
      fontSize: 18,
      color: '#BBDEFB',
      textAlign: 'center'
    }
}
export default Header;
