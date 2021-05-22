import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './App/navigation/AuthNavigation';
import TabNavigation from './App/navigation/TabNavigation';

function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
      {/* <AuthNavigation /> */}
    </NavigationContainer>
  );
}

export default App;
