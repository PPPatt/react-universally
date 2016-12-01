import React, { Component } from 'react';
import { View } from 'react-native';
import App from '../shared/components/App';

export default class NativeApp extends Component { // eslint-disable-line react/prefer-stateless-function, max-len
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
}
