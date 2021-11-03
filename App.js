import React, { Component } from 'react';
import { StyleSheet, View, Text , TouchableOpacity} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <HomeScreen />
        </View>
      </SafeAreaProvider>
    );
  }
}