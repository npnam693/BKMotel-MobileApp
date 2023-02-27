import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './AppNavigation';
import store from './redux/store';
import { Provider } from 'react-redux';

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'JosefinSans-Medium': require('./assets/fonts/JosefinSans-Medium.ttf'),
        'JosefinSans-Regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
        'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
        'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
        'JosefinSans-Bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
        'JosefinSans-SemiBold': require('./assets/fonts/JosefinSans-SemiBold.ttf'),
        'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  
  return (
      <Provider store = {store} >
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </Provider>
  );
}

