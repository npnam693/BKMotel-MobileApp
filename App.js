import { ScrollView, StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';

import Home from './screens/Home';
import Detail from './screens/Detail';
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'JosefinSans-Medium': require('./assets/fonts/JosefinSans-Medium.ttf'),
        'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
        'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
        'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf')
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  
  return (
    //   <Text style = {{fontSize: 32, color: '#1488db', fontWeight: '900'}}>BK<Text style = {{fontSize: 32, color: '#00a699', fontWeight: '700'}}>MOTEL</Text></Text>
    // </View>
      <View style={styles.container}>
      <StatusBar hidden={true}/>

        {/* <Home/> */}
        <Detail />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
